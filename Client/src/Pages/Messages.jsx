import React from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Eye, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-full no-srollbar  relative bg-gradient-to-b from-slate-600 to-black">
      <div className="max-w-6xl mx-auto p-6 ">
        {/* {title} */}
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-slate-100">Messages</h1>
          <p className="text-slate-100 mt-2">Talk to your friends and family</p>
        </div>

        {/* {connected users} */}
        <div className="flex flex-col gap-3">
          {dummyConnectionsData.map((users) => (
            <div
              key={users._id}
              className="max-w-xl flex  gap-5 p-6
              bg-gray-700  rounded-md"
            >
              <img
                src={users.profile_picture}
                className="rounded-full size-12 mx-auto "
              />
              <div className="flex-1">
                <p className="font-medium text-slate-100">{users.full_name}</p>
                <p className=" text-slate-300">@{users.username}</p>
                <p className="text-sm text-gray-300">{users.bio}</p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                 <button onClick={()=>navigate(`/messages/${users._id}`)} className="size-10 flex items-center justify-center text-sm rounded bg-slate-600
                 hover:bg-slate-400 text-slate-100 active:scale-95 transition cursor-pointer gap-1">
                  <MessageSquare className="w-4 h-4"/>
                 </button>

                  <button onClick={()=>navigate(`/profile/${users._id}`)} className="size-10 flex items-center justify-center text-sm rounded bg-slate-600
                 hover:bg-slate-400 text-slate-100 active:scale-95 transition cursor-pointer gap-1">
                  <Eye className="w-4 h-4"/>
                 </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
