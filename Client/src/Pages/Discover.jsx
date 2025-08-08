import React, { useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Search } from "lucide-react";
import UserCard from "../Components/UserCard";
import Loading from "../Components/Loading";

const Discover = () => {
  const [input, setinput] = useState("");
  const [users, setUsers] = useState(dummyConnectionsData);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setUsers([]);
      setLoading(true);
      setTimeout(() => {
        setUsers(dummyConnectionsData);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="h-full bg-gradient-to-b overflow-y-scroll no-scrollbar from-slate-600 to-black ">
      <div className="max-w-6xl mx-auto p-6">
        {/* {title} */}
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-slate-100">Discover people</h1>
          <p className="text-slate-100 mt-2">
            Connect with amazing people and grow your network
          </p>
        </div>

          {/* {Search Bar} */}
          <div className="mb-8 rounded-md border shadow-md shadow-purple-500 border-slate-200/60 bg-transparent">
            <div className="p-6">
               <div className="flex items-center ">
               <Search className="border border-slate-200 p-2 rounded-md text-slate-100 w-12 h-12 mr-2"/>
                      <input type="text" placeholder="Search people by name, username, bio, or loaction.."
                        className="pl-3 py-3 sm:pl-8 w-full border border-gray-200 rounded-md max-sm:text-sm"
                        onChange={(e)=>setinput(e.target.value)}
                        value={input}
                        onKeyUp={handleSearch}
                      />

                      
               </div>
            </div>
          </div>

          {/* {users} */}
          <div className="flex flex-wrap gap-6">
          {users.map((user)=>(
            <UserCard user ={user} key={user._id} />
          ))}

          </div>

          {
            loading && (<Loading height="60vh"></Loading>)
          }
          


      </div>
    </div>
  );
};

export default Discover;
