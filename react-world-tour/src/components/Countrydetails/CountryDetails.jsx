const CountryDetails = ({ country, handleVisitedCountry }) => {
  return (
    <div>
      <h4>Country details: </h4>
      <hr />
      <countryData
        Country={country}
        handleVisitedCountry={handleVisitedCountry}
      ></countryData>
    </div>
  );
};

export default CountryDetails;
