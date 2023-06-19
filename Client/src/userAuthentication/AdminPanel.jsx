import AdminNav from "./AdminNav";
import PropTypes from "prop-types";

function AdminPanel({ userData }) {
  return (
    <>
      <div className="flex ">
        <AdminNav />
        <div className="h-screen w-4/5 border bg-gray-200 text-black p-5">
          <h1 className="font-bold text-2xl mb-10">Hey, Welcome Admin</h1>
          <div className="">
            <h1 className="font-semibold text-xl mb-5 ml-10">Admin details</h1>
            <div className="border  border-gray-700 rounded-xl space-y-8 mt-10 ml-10 mr-24 p-10 text-lg ">
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
          </div>
        </div>
      </div>
    </>
  );
}

AdminPanel.propTypes = {
  userData: PropTypes.shape({
    fName: PropTypes.string.isRequired,
    lName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

AdminPanel.defaultProps = {
  userData: {
    fName: "Default Name",
    lName: "Default Surname",
    email: "Default Email",
  },
};

export default AdminPanel;
