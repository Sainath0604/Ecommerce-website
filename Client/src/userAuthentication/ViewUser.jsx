import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { BiEditAlt } from "react-icons/Bi";
import EditUser from "./EditUser";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AdminNav from "./AdminNav";

function ViewUser() {
  const [data, setData] = useState([]);

  const getAllUser = () => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User data");
        setData(data.data);
      });
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = (e, id, name) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete ${name} info`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });

      console.log(name, id);
    } else {
      console.log("Oops ..!!, Something went wrong please try again later");
    }
  };

  const editUser = (id, newfName, newlName, newEmail) => {
    fetch("http://localhost:5000/editUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userid: id,
        newfName: newfName,
        newlName: newlName,
        newEmail: newEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.data);
        getAllUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" md:flex">
        <AdminNav />
        <div className="flex sm:w-full md:w-4/5 justify-center">
          <div>
            <table className="border border-separate border-gray-500 w-[60vw]">
              <caption className="caption-top my-8 lg:my-16 text-3xl font-bold text-gray-800">
                All Users Information
              </caption>
              <thead className="h-14">
                <tr>
                  <th className="border border-gray-500 p-2 w-[11vw]">Name</th>
                  <th className="border border-gray-500 p-2 w-[11vw]">
                    Surname
                  </th>
                  <th className="border border-gray-500 p-2 w-[16vw]">Email</th>
                  <th className="border border-gray-500 p-2 w-[11vw]">
                    User type
                  </th>
                  <th className="border border-gray-500 p-2 w-[11vw]">
                    Delete
                  </th>
                  <th className="border border-gray-500 p-2 w-[11vw]">Edit</th>
                </tr>
              </thead>
              <tbody>
                {/* mapping the fetched data */}
                {data.map((i, index) => {
                  return (
                    <tr
                      key={i._id}
                      className={`${
                        index % 2 === 0 ? "bg-rose-100" : "bg-white"
                      }`}
                    >
                      <td className="border border-gray-500 p-2">{i.fName}</td>
                      <td className="border border-gray-500 p-2">{i.lName}</td>
                      <td className="border border-gray-500 p-2">{i.email}</td>
                      <td className="border border-gray-500 p-2">
                        {i.userType}
                      </td>
                      <td className="border border-gray-500 p-2">
                        <div className="flex justify-center">
                          <RiDeleteBin6Line
                            className="cursor-pointer text-gray-800"
                            onClick={(e) => deleteUser(e, i._id, i.fName)}
                          />
                        </div>
                      </td>
                      <td className="border border-gray-500 p-2">
                        <div className="flex justify-center ">
                          <Popup
                            trigger={
                              <button className="button">
                                <BiEditAlt className="text-gray-800" />
                              </button>
                            }
                            modal
                            nested
                          >
                            {(close) => (
                              <div>
                                <EditUser
                                  id={i._id}
                                  fName={i.fName}
                                  lName={i.lName}
                                  email={i.email}
                                  onEdit={(id, newfName, newlName, newEmail) =>
                                    editUser(id, newfName, newlName, newEmail)
                                  }
                                  onCancel={close}
                                />
                              </div>
                            )}
                          </Popup>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
