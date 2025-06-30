import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <>
      <div className="body">
        <Nav></Nav>
        <Header></Header>
        <Bottles></Bottles>
      </div>
    </>
  );
}

export default App;
