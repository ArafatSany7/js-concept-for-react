function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55"></Device>
      <Device name="Phone" price=" 30"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade = "7" score = "99"></Student>
      <Student></Student>
      <Student></Student>
      <Devoloper></Devoloper>
    </>
  );
}
function Device(props) {
  return (
    <h2>
      This is {props.name} and price is {props.price}
    </h2>
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
    <h3 className="person">
      I am a person name {person.name} with age {person.age}
    </h3>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Age: 21</p>
    </div>
  );
}

function Devoloper() {
  const devStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "50px",
  };
  return (
    <div style={devStyle}>
      <p>Coding</p>
    </div>
  );
}

export default App;
