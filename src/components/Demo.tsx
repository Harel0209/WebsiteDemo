import "./Demo.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Demo() {
  return (
    <div id="Demo">
      <h1>Experience Our Demo Server</h1>
      <div className="IP">
        <h4>demo.netskyway.net</h4>
        <p>Test our server performance now</p>
      </div>
      <button className="ID">
        Copy IP<i className="bi bi-clipboard"></i>
      </button>
      <button className="ID test">Test Connection</button>
    </div>
  );
}

export default Demo;
