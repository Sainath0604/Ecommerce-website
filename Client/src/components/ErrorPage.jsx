import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 p-10 md:p-40 ">
        <div className=" border border-gray-500 rounded-lg bg-gray-200 p-10 md:p-20">
          <div className="flex flex-col">
            <h1 className="font-bold text-base mb-5 md:mb-10 md:text-3xl">
              Oops! Something went wrong.
            </h1>
            <p className="text-sm mb-5 md:mb-10 md:text-xl">
              We apologize for the inconvenience. Please try again later.
            </p>
            <Link className="flex items-center justify-center" to="/">
              <button className="flex items-center justify-center border border-gray-600 p-2 rounded-xl bg-gray-700 text-white md:h-14 md:p-5 md:text-xl md:font-semibold">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
