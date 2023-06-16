import PropTypes from "prop-types";
import Navbar from "../components/Navbar";

function UserHome({ userData }) {
  const logOut = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    window.location.href = "./signIn";
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="mb-4 flex items-center">
          <span className="mr-2 ">Name:</span>
          <h1 className="text-xl font-bold">{userData.fName}</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Email:</span>
          <h1 className="text-xl font-bold">{userData.email}</h1>
        </div>
        <button
          className="mt-10 border border-sky-500 rounded-lg bg-green-400 text-black p-2"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

UserHome.propTypes = {
  userData: PropTypes.shape({
    fName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

UserHome.defaultProps = {
  userData: {
    fName: "Default Name",
    email: "Default Email",
  },
};

export default UserHome;
