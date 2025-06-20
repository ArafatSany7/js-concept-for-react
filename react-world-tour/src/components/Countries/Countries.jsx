import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,region")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
