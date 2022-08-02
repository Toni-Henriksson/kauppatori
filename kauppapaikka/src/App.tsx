import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import FooterSimple from "./components/FooterSimple";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NewListing from "./pages/newlisting/NewListing";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="newlisting" element={<NewListing />} />
      </Routes>
      <FooterSimple></FooterSimple>
    </>
  );
}

export default App;
