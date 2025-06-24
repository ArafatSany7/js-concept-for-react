import { useState } from "react";
import "./Country.css";
import CountryDetails from "../Countrydetails/countryDetails.jsx";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && `visited`}`}>
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button
        style={{ borderRadius: visited ? "30px" : "5px" }}
        className={visited && "btn"}
        onClick={() => {
          handleVisited();
          handleVisitedCountry(country);
        }}
      >
        {visited ? "Visited" : "visit"}
      </button>
      {visited && "I've visited this country"}

      <hr />
      <CountryDetails
        country={country}
        handleVisitedCountry={handleVisitedCountry}
      ></CountryDetails>
    </div>
  );
};

export default Country;
