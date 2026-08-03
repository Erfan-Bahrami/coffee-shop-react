import React from "react";
import { Navigate } from "react-router";
const Routprotection = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" relative />;
  }
  return children;
};

export default Routprotection;
