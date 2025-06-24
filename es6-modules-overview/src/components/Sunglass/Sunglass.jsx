import Watch from "../Watch/Watch";
import "./Sunglass.css";
import add from "./../../utils/calculate";

const Sunglass = () => {
  const first = 55;
  const second = 33;
  const sum = add(first, second);
  return (
    <div>
      <Watch></Watch>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Sunglass;
