import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [selectedClass, setSelectedClass] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header") as HTMLElement | null;
      if (!header) return;

      const sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");

      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return newMode;
    });
  };

  const handleLinkHover = (linkName: string) => {
    setSelectedClass(linkName);
  };

  const handleScrollToSection = (link: string) => {
    const section = document.getElementById(link);

    if (section) {
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition =
        elementPosition - window.innerHeight / 2 + section.offsetHeight / 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <h1
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("Hero");
          }}
        >
          NetSkyWay
        </h1>
      </div>
      <nav className="nav-bar">
        {["Features", "Pricing", "Calculator", "Game Panel", "Blog"].map(
          (link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`nav-link ${selectedClass === link ? "selected" : ""}`}
              onMouseEnter={() => handleLinkHover(link)}
              onMouseLeave={() => handleLinkHover("")}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(link);
              }}
            >
              {link}
            </a>
          )
        )}
        <i
          className={`bi ${!darkMode ? "bi-moon-stars-fill" : "bi-sun-fill"}`}
          onClick={toggleDarkMode}
        ></i>
      </nav>
    </header>
  );
}

export default Header;
