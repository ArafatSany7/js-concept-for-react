import Country from "./../Country/Country";
import CountryData from "./../CountryData/countryData";
const CountryDetails = ({ country, handleVisitedCountry }) => {
  return (
    <div>
      <h4>Country details: </h4>
      <hr />
      <CountryData
        Country={country}
        handleVisitedCountry={handleVisitedCountry}
      ></CountryData>
    </div>
  );
};

export default CountryDetails;
