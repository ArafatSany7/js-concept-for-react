import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-amber-600 rounded-3xl m-4">
      <div className=" p-4">
        <h2>
          <span className="text-7xl"> {price}</span>
        </h2>
        <h4>{name}</h4>
        <p>{features}</p>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
