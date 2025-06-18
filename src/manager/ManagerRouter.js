import React from "react";
import { Navigate } from "react-router-dom";

export default function ManagerRoute({ children }) {
  const role = localStorage.getItem("role"); // baca langsung

  if (role !== "manajer") {
    return <Navigate to="/" replace />;
  }

  return children;
}
