import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
