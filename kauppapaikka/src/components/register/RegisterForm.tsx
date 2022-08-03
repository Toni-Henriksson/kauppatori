import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../firebase/functions";
import LoadingButton from "../LoadingButton";

interface RegisterFormProps {}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = () => {
  let navigation = useNavigate();

  const [loading, setLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    pw: "",
    pwConfirmation: "",
  });

  // handles multiple inputs changes in a single function
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    register(registerInfo.email, registerInfo.pw).then((res) => {
      // A way to make sure registering was succesfull. (response from backend matches the data sent there.)
      if (res) {
        navigation("/");
        setLoading(false);
      }
    });
  };

  return (
    <div className="flex justify-center content-center items-center h-[100%]">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Sähköpostiosoite" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="nimi@kauppatori.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Salasana" />
          </div>
          <TextInput
            id="password2"
            type="password"
            name="pw"
            onChange={handleChange}
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Toista salasana" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            name="pwConfirmation"
            onChange={handleChange}
            required={true}
            shadow={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" required={true} />
          <Label htmlFor="agree">
            Rekisteröitymällä hyväksyn{" "}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              käyttöehdot.
            </a>
          </Label>
        </div>
        {loading ? (
          <LoadingButton></LoadingButton>
        ) : (
          <div>
            <Button type="submit">Rekisteröidy</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
