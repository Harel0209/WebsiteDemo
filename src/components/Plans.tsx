import "./Plans.css";
import Card from "./Card";
function Plans() {
  return (
    <div id="Pricing">
      <h1 id="choose">
        Choose Your <span>Perfect</span> Plan
      </h1>
      <section>
        <Card
          title="Basic Plan"
          subtitle="Perfect for beginners"
          price={7.4}
          ram={4}
          cpu={1}
        />
        <Card
          title="Standard Plan"
          subtitle="Perfect for growing servers"
          price={11.99}
          ram={6}
          cpu={2}
        />
        <Card
          title="Advanced Plan"
          subtitle="Perfect for growing servers"
          price={14.5}
          ram={8}
          cpu={2}
        />
        <Card
          title="Pro Plan"
          subtitle="Perfect for growing servers"
          price={19.09}
          ram={10}
          cpu={3}
        />
        <Card
          title="Ultimate Plan"
          subtitle="Perfect for large communities"
          price={23.69}
          ram={12}
          cpu={4}
        />
      </section>
    </div>
  );
}
export default Plans;
