import "./Card.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  title: string;
  subtitle: string;
  price: number;
  ram: number;
  cpu: number;
}

function Card({ title, subtitle, price, ram, cpu }: Props) {
  return (
    <div className="card">
      <div className="Title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <h2>
        ${price}
        <span>/month</span>
      </h2>
      <div className="planStats">
        <p>
          <i className="bi-hdd-fill"></i>
          {ram}GB RAM
        </p>
      </div>
      <div className="planStats">
        <p>
          <i className="bi bi-cpu-fill"></i>
          {cpu} CPU Threads
        </p>
      </div>
      <div className="planStats">
        <p>
          <i className="bi bi-sd-card-fill"></i>
          50GB SSD Storage
        </p>
      </div>
      <div className="planStats">
        <p>
          <i className="bi bi-diagram-2-fill"></i>
          Unmetered Bandwidth
        </p>
      </div>
      <div className="planStats">
        <p>
          <i className="bi bi-shield-fill-minus"></i>
          DDoS Protection
        </p>
      </div>
      <button>Choose Plan</button>
    </div>
  );
}

export default Card;
