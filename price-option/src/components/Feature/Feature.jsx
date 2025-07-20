import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <FaCheckCircle className="text-green-400 mr-2"></FaCheckCircle>
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
