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
              <div className="">
                <div className="space-x-4 mb-4">
                  <Link to="/viewUser">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Users
                    </button>
                  </Link>
                </div>
              </div>
              <div className="">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-4/5 border bg-gray-800 text-white p-5">
          <h1 className="font-bold text-2xl mb-10">Hey, Welcome Admin</h1>
          <div className="mb-5 ml-10">
            <h1 className="font-semibold text-xl ">Admin details</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
