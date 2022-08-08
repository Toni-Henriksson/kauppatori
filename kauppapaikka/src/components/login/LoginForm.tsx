import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {firebaseConfig} from "../../firebase/firebase";
import {Button, Label, TextInput} from "flowbite-react";
import emailIcon from "../images/envelope.png";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
  let navigation = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>(
    "Käyttäjätunnus tai salasana on väärä, kokeile uudestaan."
  );

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPw(newValue);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="flex justify-center content-center items-center h-[100%]">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Sähköposti" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="nimi@kauppatori.fi"
            required={true}
            onChange={onChangeEmail}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Salasana" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
            onChange={onChangePw}
            width="200px"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="pt-5">
            {error ? (
              <div>
                <p style={{color: "red", fontSize: 15, fontWeight: 500}}>{errorMsg}</p>
              </div>
            ) : (
              <Label htmlFor="remember">
                Uusi käyttäjä?{" "}
                <a href="register" style={{color: "blue"}}>
                  Rekisteröidy
                </a>
              </Label>
            )}
          </div>
        </div>

        <Button
          type="button"
          onClick={() => {
            handleLogin();
          }}
        >
          {" "}
          Kirjaudu{" "}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
