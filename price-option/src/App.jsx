import "./App.css";
import DaisyNav from "./components/daisyNav/DaisyNav";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>

      <h1 className="text-7xl bg-amber-700">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
