import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div>
      <h2>
        <span className="text-7xl"> {price}</span>
      </h2>
      <h4>{name}</h4>
      <p>{features}</p>
    </div>
  );
};

PriceOption.PropTypes = {
  option: PropTypes.object,
};

export default PriceOption;
