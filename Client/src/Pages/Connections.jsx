import React, { useState } from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserRoundPen,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections,
} from "../assets/assets.js";

const Connections = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("Followers");
  const dataArray = [
    { label: "Followers", value: followers, icon: Users },
    { label: "Following", value: following, icon: UserCheck },
    { label: "Pending", value: pendingConnections, icon: UserRoundPen },
    { label: "Connections", value: connections, icon: UserPlus },
  ];

  return (
    <div className="h-full overflow-y-scroll bg-gradient-to-b no-scrollbar from-slate-600 to-black">
      <div className="max-w-6xl mx-auto p-6">
        {/* {title} */}
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-slate-100">Connections</h1>
          <p className="text-slate-100 mt-2">
            Manage your network and discover new connections
          </p>
        </div>

        {/* {count} */}
        <div className="mb-8 flex flex-wrap gap-6 ">
          {dataArray.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1 border h-20 w-40 
                 border-gray-200 bg-slate-900 shadow rounded-md"
            >
              <b>{item.value.length}</b>
              <p className="text-slate-200">{item.label}</p>
            </div>
          ))}
        </div>

        {/* {?tab} */}

        <div
          className="inline-flex flex-wrap items-center border border-gray-200  rounded-md p-1 bg-gray-700
        shadow-sm"
        >
          {dataArray.map((tab) => (
            <button
              onClick={() => setCurrentTab(tab.label)}
              key={tab.label}
              className={`flex  items-center px-3 py-1 text-sm rounded-md 
              transition-colors ${
                currentTab === tab.label
                  ? "bg-gray-900 text-gray-200"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <tab.icon className="w-4 h-4 " />
              <span className="ml-1">{tab.label}</span>
              {tab.count !== undefined && (
                <span className="ml-2 text-xs bg-gray-800 text-shadow-gray-100 px-2 py-0.5 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
        {/* {connections} */}
        <div className="flex flex-wrap gap-6 mt-6">
          {dataArray
            .find((item) => item.label === currentTab)
            .value.map((user) => (
              <div
                key={user._id}
                className="w-full max-w-80 flex gap-5 p-6 bg-gray-900 rounded-md "
              >
                <img
                  src={user.profile_picture}
                  className="rounded-full w-12 h-12 mx-auto"
                />
                <div className="flex-1 ">
                    <p className="font-medium  text-slate-200">{user.full_name}</p>
                    <p className="  text-slate-400">@{user.username}</p>
                    <p className="text-sm  text-slate-400">{user.bio.slice(0,30)}...</p>
                    <div className="flex max-sm:flex-col gap-2 mt-4"> 
                    {
                      <button onClick={()=>navigate(`/profile/${user._id}`)} className="w-full p-2 text-sm bg-gradient-to-r from-slate-300 to-purple-300
                           hover:from-purple-300  hover:to-slate-300 rounded-md active:scale-95 transition text-black cursor-pointer" > 
                           View Profile
                          </button>
                    }
                    {
                      currentTab === 'Following' && (
                        <button  className="w-full p-2 text-sm bg-gradient-to-r from-slate-300 to-purple-300
                           hover:from-purple-300  hover:to-slate-300 rounded-md active:scale-95 transition text-black cursor-pointer" > 
                            Unfollow
                          </button>
                      )
                    }
                     {
                      currentTab === 'Pending' && (
                        <button  className="w-full p-2 text-sm bg-gradient-to-r from-slate-300 to-purple-300
                           hover:from-purple-300  hover:to-slate-300 rounded-md active:scale-95 transition text-black cursor-pointer" > 
                            Accept
                          </button>
                      )
                    }
                     {
                      currentTab === 'Connections' && (
                        <button onClick={()=>navigate(`/messages/${user._id}`)} className="w-full p-2 text-sm bg-gradient-to-r from-slate-300 to-purple-300
                           flex items-center justify-center gap-1
                            hover:from-purple-300  hover:to-slate-300 rounded-md active:scale-95 transition text-black cursor-pointer" > 
                            <MessageSquare className="w-4 h-4"/>
                            Message
                          </button>
                      )
                    }
                           
                    </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;
