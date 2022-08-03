import MainContainer from "../../components/login/MainContainer";

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <div className="flex justify-center mt-10 pt-10 w-screen h-screen">
      <MainContainer></MainContainer>
    </div>
  );
};

export default Login;
