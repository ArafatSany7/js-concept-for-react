import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import PriceOption from "./components/PriceOption/PriceOption";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <PriceOption></PriceOption>
      <PriceOptions></PriceOptions>
      <h1 className="text-7xl bg-amber-700">Vite + React</h1>
    </>
  );
}

export default App;
