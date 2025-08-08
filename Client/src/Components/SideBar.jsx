import React from "react";
import { assets, dummyUserData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems.jsx";
import { CirclePlus, LogOut, UserCheck } from "lucide-react";
import { UserButton, useClerk } from "@clerk/clerk-react";

const SideBar = ({ setSidebarOpen, sidebarOpen }) => {
  const navigate = useNavigate();
  const user = dummyUserData;
  const { signOut } = useClerk();
  return (
    <div
      className={`w-60 xl:w-72 bg-gray-950 border-r no-scrollbar  border-gray-400 flex flex-col justify-between 
    items-center
    max-sm:absolute top-0 bottom-0 z-20 ${
      sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
    }
    transition-all duration-300 ease-in-out`}
    >
      <div className="w-full">
        <img
          onClick={() => navigate("/")}
          src={assets.applogo}
          className="w-26 ml-7 my-2 cursor-pointer"
        ></img>

        <hr className="border-gray-400 mb-8"></hr>
        <MenuItems setSidebarOpen={setSidebarOpen}></MenuItems>
        <Link
          to="/create-post"
          className="flex items-center justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg
           bg-gradient-to-r from-indigo-950 to-purple-950 hover:from-purple-950 hover:to-indigo-950 active:scale-95
           transition text-white cursor-pointer"
        >
          {" "}
          <CirclePlus className="w-5 h-5"></CirclePlus> Create Post{" "}
        </Link>
      </div>
      <div className="w-full border-t border-gray-400 py-4  px-7 justify-between flex items-center ">
        <div className="flex gap-2  items-center cursor-pointer ">
          <UserButton></UserButton>

          <div>
            <h1 className="text-sm font-medium">{user.full_name}</h1>
            <p className="text-xs text-gray-400">@{user.username}</p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4 text-gray-200 hover:text-white transition cursor-pointer"
        ></LogOut>
      </div>
    </div>
  );
};

export default SideBar;
