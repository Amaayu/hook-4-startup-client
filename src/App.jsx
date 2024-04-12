import React from "react";
import SignUp from "./pages/singup/Singup";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
