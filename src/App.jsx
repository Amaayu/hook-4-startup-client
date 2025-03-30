import React, { useEffect, useState } from "react";
import SignUp from "./pages/singup/Singup";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Feed from "./pages/feed/Feed";
import CreateProfile from "./pages/createprofile/CreateProfile";
import Postpage from "./pages/post/Postpage";
import EditProfile from "./pages/editprofile/Editprofile";
import Notification from "./pages/notification/Notification";
import Meetup from "./pages/meetup/Meetup";
import Search from "./pages/Search/Search";

// ✅ Add this inside <Routes>
<Route path="/edit-profile" element={<EditProfile />} />;

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Postpage />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/meetup" element={<Meetup />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

// At the end of App.jsx
export default App;
