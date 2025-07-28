import "./Footer.css";

function Footer() {
  return (
    <footer id="Footer">
      <div id="Info">
        <h4>NetSkyWay</h4>
        <p>
          © 2024 auth.ink. All rights reserved.
          <br />
          All prices on this page include an added PayPal fee.
        </p>
      </div>
      <div id="Link">
        <a>Terms of Service</a>
        <a>Privacy</a>
        <a>DMCA</a>
      </div>
      <div id="Icons">
        <i className="bi bi-telephone-fill"></i>
        <i className="bi bi-discord"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-tiktok"></i>
        <i className="bi bi-youtube"></i>
      </div>
    </footer>
  );
}

export default Footer;
