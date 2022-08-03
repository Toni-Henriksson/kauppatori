import "./animatedbox.css";
interface AnimatedBoxProps {}

const AnimatedBox: React.FunctionComponent<AnimatedBoxProps> = () => {
  return (
    <div className="area">
      <div className="context">
        <h1>Kauppamesta</h1>
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default AnimatedBox;
