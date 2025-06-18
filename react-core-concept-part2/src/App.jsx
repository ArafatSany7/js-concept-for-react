import "./App.css";
import Counter from "./counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Click");
  }
  const handleCliked = () => {
    alert("Second button clicked!!");
  };
  const addfive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me </button>
      <button onClick={handleCliked}>Click Two</button>
      <button
        onClick={() => {
          alert("Third Click");
        }}
      >
        Third Button
      </button>

      <button
        onClick={() => {
          addfive(45);
        }}
      >
        {" "}
        Fifth
      </button>
    </>
  );
}

export default App;
