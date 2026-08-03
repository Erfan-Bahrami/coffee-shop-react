import React from "react";
import LogoutButton from "../../Logout/Logoutbtn";
import Outicon from "./Outicon";
const Usericon = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    console.log("کاربر خارج شد");
  };
  return (
    <>
      <div className="flex items-center gap-x-3">
        {user ? (
          <>
            <span>{user.name}</span>
            <LogoutButton onLogout={handleLogout} />
          </>
        ) : (
          <>
            <Outicon />
          </>
        )}
      </div>
    </>
  );
};

export default Usericon;
