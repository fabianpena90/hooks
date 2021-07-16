import React, { useContext } from "react";
import { UserContext } from "./UserContex";

export const About = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <div>
      <h1>About</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-warning" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};
