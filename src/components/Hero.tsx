import "./Hero.css";
function Hero() {
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
    <section id="Hero" className="hero">
      <p className="branding"> ✦ NetSkyWay Hosting</p>
      <h1 className="title">Custom Hosting Solutions</h1>
      <h1 className="subtitle">For VPS, Game Servers, and Discord Bots</h1>
      <p className="description">
        NetSkyWay is a premium hosting for VPS, game server, and Discord bot
        made for true professionals.
      </p>
      <button id="mainButton" onClick={() => handleScrollToSection("Pricing")}>
        Get Started
      </button>
    </section>
  );
}

export default Hero;
