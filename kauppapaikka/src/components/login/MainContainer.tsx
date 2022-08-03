import AnimatedBox from "../animatedbox/AnimatedBox";
import LoginForm from "./LoginForm";

interface MainContainerProps {}

const MainContainer: React.FunctionComponent<MainContainerProps> = () => {
  return (
    <>
      <div className="w-2/4 min-w-[350px] flex flex-row h-1/2 md:h-3/4 border-2 lightgray rounded-xl">
        <div className="w-1/2">
          <AnimatedBox></AnimatedBox>
        </div>
        <div className="w-1/2 z-10 p-1">
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
