import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
