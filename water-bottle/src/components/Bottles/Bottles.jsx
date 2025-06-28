import "./Bottles.css";
import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCard = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h2>Available Bottles Here: {bottles.length}</h2>
      <h4>Cart: {cart.length}</h4>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCard={() => handleAddToCard(bottle)}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
