import React, { useState } from "react";
import axios from "axios";

// User Profile Page

function UserProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
