import "./tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./userAuthentication/SignIn";
import SignUp from "./userAuthentication/SignUp";
import ForgotPassword from "./userAuthentication/ForgotPassword";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
