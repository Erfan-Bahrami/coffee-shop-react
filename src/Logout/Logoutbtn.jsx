import React from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("✅ با موفقیت خارج شدید!");
    navigate("/login");

    if (onLogout) {
      onLogout();
    }
  };

  return <button onClick={handleLogout}>خروج</button>;
};

export default LogoutButton;
