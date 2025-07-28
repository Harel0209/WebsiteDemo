import "./Features.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Features() {
  return (
    <div id="Features">
      <h1>
        Why Choose <span>NetSkyway</span>?
      </h1>
      <p>
        Explore our top-tier features designed to enhance your hosting
        experience.
      </p>
      <section id="Feats">
        <div className="Feature">
          <i className="bi bi-hdd-stack-fill"></i>
          <div className="details">
            <h5>High-Performance Servers</h5>
            <p>
              Enjoy lag-free gaming with our powerful servers optimized for peak
              performance.
            </p>
          </div>
        </div>
        <div className="Feature">
          <i className="bi bi-shield-fill-plus"></i>
          <div className="details">
            <h5>Advanced Security</h5>
            <p>
              Rest easy with our robust protection measures safeguarding your
              gaming experience.
            </p>
          </div>
        </div>
        <div className="Feature">
          <i className="bi bi-file-lock2-fill"></i>
          <div className="details">
            <h5>DDoS Protection</h5>
            <p>
              Stay secure and uninterrupted with our state-of-the-art DDoS
              protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
