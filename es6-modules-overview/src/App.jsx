import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  // const watches = [
  //   { id: 1, name: "Apple Watch", Price: 300 },
  //   { id: 2, name: "Samsung Watch", Price: 200 },
  //   { id: 3, name: "Huwaei Watch", Price: 100 },
  // ];

  // const watches = [
  //   {
  //     id: "SW001",
  //     name: "PulseX Pro",
  //     price: 299.99,
  //   },
  //   {
  //     id: "SW002",
  //     name: "FitMax Ultra",
  //     price: 199.49,
  //   },
  //   {
  //     id: "SW003",
  //     name: "TimeCore Elite",
  //     price: 249.99,
  //   },
  //   {
  //     id: "SW004",
  //     name: "ActiveGo Smart",
  //     price: 179.0,
  //   },
  //   {
  //     id: "SW005",
  //     name: "Zenith Watch 5",
  //     price: 329.95,
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
