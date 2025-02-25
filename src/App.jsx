import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - order now</h1>
      <Pizza name="chicken" description="cheese, cajun, sausage" />
      <Pizza name="hawaiin" description="ham, cheese, sausage" />
      <Pizza name="ham" description="fried, Pepperoni, sausage" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
