import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
import logo from "../Logo/logo.png";

function AdminPanel() {
  const logOut = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.href = "./signIn";
  };

  return (
    <>
      {/* <div>
        <Navbar />
        <h1 className="text-center text-3xl font-bold mt-10">Admin Panel</h1>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="space-x-4 mb-4">
            <Link to="/viewUser">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Users
              </button>
            </Link>
            <Link to="/uploadProduct">
              <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                Upload Products
              </button>
            </Link>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div> */}

      <div className="flex ">
        <div className="h-screen w-1/5 border bg-gray-800 text-white text-2xl  ">
          <div className="flex flex-col">
            <div className="flex justify-between items-center p-5 border border-lime-400 h-[15vh]">
              <div>
                <Link to="/">
                  <img className="w-28" src={logo} alt="Your Company" />
                </Link>
              </div>
              <div>
                <span className="">Admin Panel</span>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 border border-indigo-400 h-[84.8vh]">
              <div className="border border-rose-300">Buttons</div>
              <div className="border border-rose-300">logout</div>
            </div>
          </div>
        </div>
        <div className="h-screen w-4/5 border bg-gray-800 text-white p-5">
          Content{" "}
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
