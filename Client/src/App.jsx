import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Feed from "./Pages/Feed.jsx";
import Messages from "./Pages/Messages.jsx";
import ChatBox from "./Pages/ChatBox.jsx";
import Connections from "./Pages/Connections.jsx";
import Discover from "./Pages/Discover.jsx";
import Profile from "./Pages/Profile.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import {useUser} from "@clerk/clerk-react"
import Layout from "./Pages/Layout.jsx";
import {Toaster } from "react-hot-toast"

const App = () => {
  const {user} = useUser()
  return (
    <div>
    <Toaster/>
      <Routes>
        <Route path="/" element={!user ?  <Login /> : <Layout/>}>
          <Route index element={<Feed />}></Route>

          <Route path="messages" element={<Messages />}></Route>
          <Route path="messages/:userId" element={<ChatBox />}></Route>

          <Route path="connections" element={<Connections />}></Route>
          <Route path="discover" element={<Discover />}></Route>

          <Route path="profile" element={<Profile />}></Route>
          <Route path="profile/:profileId" element={<Profile />}></Route>

          <Route path="create-post" element={<CreatePost />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
