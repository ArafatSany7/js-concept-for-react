import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  );
}

function Person() {
  // const age = 35;
  // const money = 60;
  const person = {
    name: "sany",
    age: 12,
  };

  return (
    <h3>
      I am a person name {person.name} with age {person.age}
    </h3>
  );
}

function Student() {
  return (
    <div>
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Age: 21</p>
    </div>
  );
}

export default App;
