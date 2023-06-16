import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
  return (
    <>
      <Navbar />
      <div className="mt-5 flex justify-center w-auto">
        <table className="border border-separate w-[60vw]">
          <caption className="caption-top m-5">All users information</caption>
          <thead className="h-14">
            <tr>
              <th className="border p-2 w-[11vw]">Name</th>
              <th className="border p-2 w-[11vw]">Surname</th>
              <th className="border p-2 w-[16vw]">Email</th>
              <th className="border p-2 w-[11vw]">User type</th>
            </tr>
          </thead>
          <tbody>
            {/* mapping the fetched data */}
            {data.map((i, index) => {
              return (
                <tr
                  key={i._id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="border p-2">{i.fName}</td>
                  <td className="border p-2">{i.lName}</td>
                  <td className="border p-2">{i.email}</td>
                  <td className="border p-2">{i.userType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewUser;
