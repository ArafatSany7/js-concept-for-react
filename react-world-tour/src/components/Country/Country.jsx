import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? "Visited" : "visit"}</button>
      {visited && "I've visited this country"}
    </div>
  );
};

export default Country;
