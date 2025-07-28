import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>

      <h1 className="text-7xl bg-amber-600">Price Option </h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
