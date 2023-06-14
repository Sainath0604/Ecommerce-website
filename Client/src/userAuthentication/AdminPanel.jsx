import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function AdminPanel() {
  const logOut = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.href = "./signIn";
  };

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default AdminPanel;
