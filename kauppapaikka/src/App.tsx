import {useContext, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/static-ui-elements/Navigation";
import FooterSimple from "./components/static-ui-elements/FooterSimple";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NewListing from "./pages/newlisting/NewListing";
import {NavBar} from "./components/static-ui-elements/NavBar";

import {CartProvider} from "./context/CartContext";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase/firebase";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  // This is done here just because useContext + onAuthStateChanged crashes the app on lower components. Here it works fine.
  const [userEmail, setUserEmail] = useState<any>("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserEmail(user.email);
    }
  });

  return (
    <CartProvider>
      <NavBar userEmail={userEmail}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="newlisting" element={<NewListing userEmail={userEmail} />} />
      </Routes>
      <FooterSimple></FooterSimple>
    </CartProvider>
  );
}

export default App;
