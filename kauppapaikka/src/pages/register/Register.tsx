import RegisterForm from "../../components/RegisterForm";
interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 pt-10 w-screen h-screen">
        <div className="flex justify-center items-center w-2/3 max-w-xl h-1/2 border-2 rounded-lg bg-sky-100">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
