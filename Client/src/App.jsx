import "./tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./userAuthentication/SignIn";
import SignUp from "./userAuthentication/SignUp";
import ForgotPassword from "./userAuthentication/ForgotPassword";
import UserDetails from "./userAuthentication/UserDetails";
import UserHome from "./userAuthentication/UserHome";
import AdminSignUp from "./userAuthentication/AdminSignUp";
import AdminPanel from "./userAuthentication/AdminPanel";
import ViewUser from "./userAuthentication/ViewUser";
import EditUser from "./userAuthentication/EditUser";
import AdminNav from "./userAuthentication/AdminNav";

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
            <Route path="/userDetails" element={<UserDetails />} />
            <Route path="/userHome" element={<UserHome />} />
            <Route path="/adminSignUp" element={<AdminSignUp />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/viewUser" element={<ViewUser />} />
            <Route path="/editUser" element={<EditUser />} />
            <Route path="/adminNav" element={<AdminNav />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
