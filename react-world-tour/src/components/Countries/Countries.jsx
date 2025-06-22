import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countires.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,cca3"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    const newVisited = [...visitedCountry, country];
    setVisitedCountry(newVisited);
  };
  return (
    <div>
      <div>
        <h5> Visited countries: {visitedCountry.length} </h5>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
