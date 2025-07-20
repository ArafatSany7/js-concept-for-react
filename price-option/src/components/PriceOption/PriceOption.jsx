import PropTypes from "prop-types";
import Feature from "./../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 rounded-3xl m-4 flex flex-col">
      <div className=" p-4">
        <h2>
          <span className="text-7xl font-extrabold text-center justify-center">
            {" "}
            {price}$
          </span>
        </h2>
        <h4 className="text-center bg-blue-500 rounded-4xl p-3 m-3">{name}</h4>
        <hr />
        <div className="pl-6">
          {features.map((feature, index) => (
            <Feature feature={feature} key={index}></Feature>
          ))}
        </div>
      </div>

      <div>
        <button className="justify-center w-full bg-green-700 py-4 rounded-3xl hover:bg-green-900 transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
