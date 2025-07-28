import { useState } from "react";
import Button from "./Button";
import "./Global.css";
import "./Calculator.css";

function Calculator() {
  // State for all sliders
  const [ram, setRam] = useState(1);
  const [cpu, setCpu] = useState(1);
  const [disk, setDisk] = useState(50);
  const [ports, setPorts] = useState(2);
  const [databases, setDatabases] = useState(1);
  const [backups, setBackups] = useState(0);

  // Price calculation based on slider values
  const calculatePrice = () => {
    const ramPrice = (ram - 1) * 1.25;
    const cpuPrice = (cpu - 1) * 2.1;
    const diskPrice = ((disk - 50) / 10) * 1.05;
    const portsPrice = (ports - 2) * 0.26;
    const databasePrice = (databases - 1) * 0.52;
    const backupsPrice = backups * 3.14;

    return (
      3.64 +
      ramPrice +
      cpuPrice +
      diskPrice +
      portsPrice +
      databasePrice +
      backupsPrice
    );
  };

  return (
    <div id="Calculator" className="Calc">
      <h1>Customize Your Server</h1>
      <section className="Ranges">
        <h3>Server Price Calculator</h3>
        <p>Adjust the sliders to calculate your perfect server configuration</p>

        <div className="Slider">
          <p>Ram: {ram} GB</p>
          <input
            type="range"
            min="1"
            max="32"
            value={ram}
            onChange={(e) => setRam(Number(e.target.value))}
          />
        </div>

        <div className="Slider">
          <p>CPU Threads: {cpu}</p>
          <input
            type="range"
            min="1"
            max="8"
            value={cpu}
            onChange={(e) => setCpu(Number(e.target.value))}
          />
        </div>

        <div className="Slider">
          <p>Disk Space: {disk} GB</p>
          <input
            type="range"
            min="50"
            max="125"
            step="5"
            value={disk}
            onChange={(e) => setDisk(Number(e.target.value))}
          />
        </div>

        <div className="Slider">
          <p>Port Allocations: {ports}</p>
          <input
            type="range"
            min="2"
            max="10"
            value={ports}
            onChange={(e) => setPorts(Number(e.target.value))}
          />
        </div>

        <div className="Slider">
          <p>Databases: {databases}</p>
          <input
            type="range"
            min="1"
            max="5"
            value={databases}
            onChange={(e) => setDatabases(Number(e.target.value))}
          />
        </div>

        <div className="Slider">
          <p>Backups: {backups}</p>
          <input
            type="range"
            min="0"
            max="5"
            value={backups}
            onChange={(e) => setBackups(Number(e.target.value))}
          />
        </div>
      </section>

      <h2>Total Price: ${calculatePrice().toFixed(2)} / month</h2>
      <Button text="Get Started"></Button>
    </div>
  );
}

export default Calculator;
