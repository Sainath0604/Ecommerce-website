import PropTypes from "prop-types";
import { useState } from "react";

const EditUser = ({ id, fName, lName, email, onEdit, onCancel }) => {
  const [newfName, setNewfName] = useState(fName);
  const [newlName, setNewlName] = useState(lName);
  const [newEmail, setNewEmail] = useState(email);

  const handleEdit = () => {
    onEdit(id, newfName, newlName, newEmail);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="bg-white border-2 border-sky-500 rounded-3xl p-4 h-[50vh]">
      <h1 className="flex items-center justify-center border border-gray-300 bg-emerald-500 rounded-xl h-10 p-2 font-bold text-stone-800 text-xl">
        Edit User
      </h1>

      <div>
        <div className="md:mt-10 md:ml-10 md:mb-10 flex flex-col">
          <div>
            <label className="font-bold">
              First name:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                placeholder="First name"
                value={newfName}
                onChange={(e) => setNewfName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="font-bold">
              Surname:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                placeholder="Surname"
                value={newlName}
                onChange={(e) => setNewlName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="font-bold">
              Email:
              <input
                className="ml-5 mb-4 border border-sky-400 rounded-lg p-1 font-normal"
                type="text"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            className="border border-blue-700 bg-blue-500 rounded-lg px-2 py-1 mr-14 h-[6vh] w-[5vw] font-bold text-lg text-white "
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="border border-red-700 bg-red-500 rounded-lg px-2 py-1  h-[6vh] w-[5vw] font-bold text-lg text-white "
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

EditUser.propTypes = {
  id: PropTypes.string,
  fName: PropTypes.string,
  lName: PropTypes.string,
  email: PropTypes.string,
  onEdit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditUser;
