/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  function resetPassword(e) {
    e.preventDefault();
    console.log("Forgot password");
    fetch("http://localhost:5000/forgotPassword", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert(data.status);
      });
    alert("A link to set the password to your email, please check your email");
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10 h-screen">
        <form onSubmit={resetPassword} className="w-full max-w-sm">
          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full sm:w-80 md:w-96 lg:w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset Password
            </button>
            <div className="mt-8">
              Remember your password?
              <Link
                to="/SignIn"
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                Sign in
              </Link>
            </div>
            <div className="mt-1">
              Don't have an account?
              <Link
                to="/SignUp"
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
