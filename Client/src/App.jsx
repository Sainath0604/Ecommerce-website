import "./tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./userAuthentication/SignIn";
import SignUp from "./userAuthentication/SignUp";
import ForgotPassword from "./userAuthentication/ForgotPassword";
import UserDetails from "./userAuthentication/UserDetails";
import UserHome from "./userAuthentication/UserHome";
import AdminSignUp from "./admin/AdminSignUp";
import AdminPanel from "./admin/AdminPanel";
import ViewUser from "./admin/ViewUser";
import EditUser from "./admin/EditUser";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";
import UploadProduct from "./admin/UploadProduct";
import ViewProduct from "./admin/ViewProduct";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const userType = window.localStorage.getItem("userType");
    setUserType(userType);
  }, []);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route
              path="/signIn"
              element={isLoggedIn == "true" ? <UserDetails /> : <SignIn />}
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/userDetails" element={<UserDetails />} />
            <Route path="/userHome" element={<UserHome />} />
            <Route path="/adminSignUp" element={<AdminSignUp />} />

            {userType === "admin" ? (
              <Route path="/adminPanel" element={<AdminPanel />} />
            ) : (
              <Route path="/adminPanel" element={<ErrorPage />} />
            )}

            {userType === "admin" ? (
              <Route path="/viewUser" element={<ViewUser />} />
            ) : (
              <Route path="/viewUser" element={<ErrorPage />} />
            )}

            {userType === "admin" ? (
              <Route path="/editUser" element={<EditUser />} />
            ) : (
              <Route path="/editUser" element={<ErrorPage />} />
            )}

            <Route path="/errorPage" element={<ErrorPage />} />
            <Route path="/uploadProduct" element={<UploadProduct />} />
            <Route path="/viewProduct" element={<ViewProduct />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
