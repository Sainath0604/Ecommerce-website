import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Footer from "./Footer";

function Checkout() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const [userData, setUserData] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User data");
        if (data.data.userType === "admin") {
          setAdmin(true);
        }
        setUserData(data.data);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-indigo-100">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow">
        <div className="flex flex-col  lg:flex-row lg:mx-5 lg:mt-5 mb-8 px-5 md:px-20 lg:px-10 pt-10 lg:pt-5 pb-10 lg:pb-5 gap-y-8 lg:gap-x-12">
          <div className="p-5 w-full lg:w-[70%] ">
            <div className="">
              <div className="h-36">
                <div className="font-bold text-2xl">Hello,</div>
                {isLoggedIn == "true" ? (
                  <div className="flex flex-col ml-5 ">
                    <div>
                      <span className="mr-2 font-medium text-xl">Name:</span>
                      <span className="font-semibold text-2xl">
                        {userData.fName}
                      </span>
                    </div>
                    <div>
                      <span className="mr-2  font-medium text-xl">Email:</span>
                      <span className="font-semibold text-2xl">
                        {userData.email}
                      </span>
                    </div>
                  </div>
                ) : (
                  <h1 className="ml-5 font-semibold text-2xl">Guest</h1>
                )}
                <div className="font-bold text-2xl mt-5">
                  Your shopping cart is here
                </div>
              </div>
            </div>
            <div>
              <CheckoutProduct />
            </div>
          </div>
          <div className=" gap-y-5 w-full lg:w-1/4">
            <div className="flex flex-col p-5">
              <Subtotal />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

Checkout.propTypes = {
  fName: PropTypes.string,
  email: PropTypes.string,
};
Checkout.defaultProps = {
  fName: "Guest",
  email: "",
};

export default Checkout;
