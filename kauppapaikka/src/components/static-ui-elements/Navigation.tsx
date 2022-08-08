import {useState, useContext} from "react";
import {Navbar, Button, Dropdown} from "flowbite-react";

import {getAuth, onAuthStateChanged} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase/firebase";
import {logout} from "../../firebase/functions";

import shoppingCart from "../../images/shopping-cart.png";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface NavProps {}

export function Navigation() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {" "}
            Nettikirppari{" "}
          </span>
        </Navbar.Brand>
        {userLoggedIn ? (
          <div className="flex md:order-2 z-10">
            <div className="flex flex-wrap items-center mr-2">
              <Button size="md" onClick={() => "moi"}>
                <img src={shoppingCart} alt="cart" style={{width: "20px"}}></img>
              </Button>
            </div>
            <div>
              <Dropdown label="Profiili" size={"md"}>
                <Dropdown.Header>
                  <span className="block truncate text-xs font-medium">
                    {auth.currentUser?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item
                  onClick={() => {
                    window.location.href = "profile";
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
}

export default Navigation;
