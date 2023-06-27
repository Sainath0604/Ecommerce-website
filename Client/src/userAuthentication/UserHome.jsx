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
      <div className="flex flex-col justify-center items-center">
        <div className="border w-[60%]  border-gray-700 rounded-xl space-y-4 lg:space-y-8 mt-8 mx-5  lg:m-20  p-4 lg:p-10 text-base ">
          <div className="border border-gray-900 rounded-lg">
            <div className="flex">
              <div className="border-r border-gray-900 pl-5 pr-5 py-2">
                <span className="font-bold ">Name</span>
              </div>
              <div className="pl-5 py-2">
                <span>{userData.fName}</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-900 rounded-lg">
            <div className="flex">
              <div className="border-r border-gray-900 pl-5 pr-5 py-2">
                <span className="font-bold">Surname</span>
              </div>
              <div className="pl-5 py-2">
                <span>{userData.lName}</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-900 rounded-lg">
            <div className="flex">
              <div className="border-r border-gray-900 pl-5 pr-5 py-2">
                <span className="font-bold">Email</span>
              </div>
              <div className="pl-5 py-2">
                <span>{userData.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className=" border border-sky-500 rounded-lg bg-gray-700 hover:bg-gray-800 text-white p-2 lg:px-5"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

UserHome.propTypes = {
  userData: PropTypes.shape({
    fName: PropTypes.string.isRequired,
    lName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

UserHome.defaultProps = {
  userData: {
    fName: "Default Name",
    lName: "Default Surname",
    email: "Default Email",
  },
};

export default UserHome;
