import React, { useState } from "react";
import { Navbar, Button, Avatar, Dropdown, TextInput } from "flowbite-react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/functions";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface Props {}

const Navigation: React.FunctionComponent<Props> = () => {
  let navigation = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserLoggedIn(true);
    }
  });
  const navigate = () => {
    window.location.href = "profile";
  };
  return (
    <div className="sticky top-0 z-50">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {" "}
            Kauppatori{" "}
          </span>
        </Navbar.Brand>
        <div className="flex justify-center">
          <TextInput placeholder="Hae ilmoitusta"></TextInput>
          <Button>Hae</Button>
        </div>
        {userLoggedIn ? (
          <div className="flex md:order-2 z-10">
            <div>
              <Dropdown label="Profiili">
                <Dropdown.Item
                  onClick={() => {
                    navigate();
                  }}
                >
                  Profiili
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    logout();
                  }}
                >
                  Kirjaudu ulos
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        ) : (
          <div className="flex md:order-2">
            <Button href="login"> Kirjaudu </Button>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;