import { useEffect, useState } from "react";

import UserHome from "./UserHome";

function UserDetails() {
  const [userData, setUserData] = useState({});
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User data");
        if (data.data.userType === "admin") {
          setAdmin(true);
        }
        setUserData(data.data);
      });
  }, []);

  return admin ? (
    <h1>Welcome to admin page</h1>
  ) : (
    userData && Object.keys(userData).length !== 0 && (
      <UserHome userData={userData} />
    )
  );
}

export default UserDetails;
