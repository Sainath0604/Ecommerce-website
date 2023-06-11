import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function SignIn() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  function registerUser(e) {
    e.preventDefault();
    console.log(fName, lName, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fName,
        lName,
        email,
        password,
        userType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          console.log("User aleready exists");
        } else {
          alert("User Registered, Now you can proceed with login");
          console.log(data, "User Registered");
          if (data.status == "ok") {
            window.location.href = "./signIn";
          }
        }
      });
  }

  function UserOrAdmin() {
    setUserType("user");
  }

  useEffect(() => {
    console.log(userType);
  }, [userType]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10 h-80">
        <form onSubmit={registerUser} className="w-full max-w-sm">
          <div className="h-10 text-2xl text-center font-bold">
            <h1 value={userType}>User sign up</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fName"
              type="name"
              placeholder="Enter your First Name"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lName"
              type="name"
              placeholder="Enter your Last Name"
              value={lName}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={UserOrAdmin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <div className="mt-10">
              Already have account?
              <Link
                to="/SignIn"
                className="text-blue-500 hover:text-blue-700 ml-2 "
              >
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
