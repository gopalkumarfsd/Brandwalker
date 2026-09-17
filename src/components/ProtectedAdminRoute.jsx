import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const token = localStorage.getItem("adminToken");
  const storedUser = localStorage.getItem("adminUser");

  if (!token || !storedUser) {
    return <Navigate to="/admin/login" replace />;
  }

  try {
    const user = JSON.parse(storedUser);

    if (user.role !== "admin") {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");

      return <Navigate to="/admin/login" replace />;
    }
  } catch {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}