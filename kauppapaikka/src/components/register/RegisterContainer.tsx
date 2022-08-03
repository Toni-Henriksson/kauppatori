import AnimatedBox from "../animatedbox/AnimatedBox";
import RegisterForm from "./RegisterForm";

interface RegisterContainerProps {}

const RegisterContainer: React.FunctionComponent<
  RegisterContainerProps
> = () => {
  return (
    <>
      <div className="w-2/4 min-w-[350px] flex flex-row h-1/2 md:h-3/4 border-2 lightgray rounded-xl">
        <div className="w-1/2">
          <AnimatedBox></AnimatedBox>
        </div>
        <div className="w-1/2 z-10 p-1">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </>
  );
};

export default RegisterContainer;
