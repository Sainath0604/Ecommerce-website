import { Link } from "react-router-dom";
import logo from "../Logo/logo.png";
import { BiLogOut } from "react-icons/Bi";

function AdminNav() {
  const logOut = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.href = "./signIn";
  };

  return (
    <>
      <div className="h-screen w-1/5  bg-gray-800 ">
        <div className="flex flex-col text-white ">
          <div className="flex flex-col justify-between items-center border-b border-gray-500 h-[19vh] p-4 text-3xl">
            <div className="">
              <Link to="/">
                <img className="w-28" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="font-bold pb-4">Admin Panel</div>
          </div>
          <div className="flex flex-col justify-between h-[79vh] px-8 ">
            <div className="mt-5 ">
              <div className="text-lg ">
                <Link to="/viewUser">
                  <div className=" hover:bg-gray-700 text-white font-base py-1 pl-1 rounded-md">
                    View Users
                  </div>
                </Link>
              </div>
            </div>
            <div className="pl-1 pb-3">
              <BiLogOut className="text-3xl cursor-pointer" onClick={logOut} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNav;
