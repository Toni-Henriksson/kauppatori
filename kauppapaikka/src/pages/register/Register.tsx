import RegisterContainer from "../../components/register/RegisterContainer";
import RegisterForm from "../../components/register/RegisterForm";
interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 pt-10 w-screen h-screen">
        <RegisterContainer></RegisterContainer>
      </div>
    </div>
  );
};

export default Register;
