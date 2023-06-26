import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../CSS/component.css";

function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="bgImage h-[92.9vh] md:h-[91.2vh] lg:h-[91.9vh] flex justify-center items-center relative">
        <div>
          <div className="flex flex-col justify-center items-center h-full relative">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-300 mb-10 md:mb-16 pl-10 md:pl-16 lg:pl-0">
              Welcome to Ecomm,
              <br /> Here you can buy any type of product online.
            </h1>
            <div className="flex flex-col lg:flex-row  lg:space-x-16 ">
              <Link to="/shop">
                <button className="border-2 hover:bg-gray-300 text-white hover:text-gray-800 font-bold text-xl py-2 px-4 rounded-md h-15 w-52 mb-5 lg:mb-0">
                  Start shopping
                </button>
              </Link>
              <button className="border-2 hover:bg-gray-300 text-white hover:text-gray-800 font-bold text-xl py-2 px-4 rounded-md h-15 w-36">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
