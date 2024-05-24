import React, { useEffect, useState } from "react";
import SignUp from "./pages/singup/Singup";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Feed from "./pages/feed/Feed";
import Postpage from "./pages/post/Postpage";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
const App = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(Data);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Postpage />} />
      </Routes>
    </>
  );
};

export default App;
