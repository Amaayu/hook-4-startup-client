import React from "react";
import SignUp from "./pages/singup/Singup";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
