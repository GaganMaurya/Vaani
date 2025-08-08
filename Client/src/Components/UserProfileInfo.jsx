import { Calculator, Calendar, MapPin, PenBox, Verified } from "lucide-react";
import React from "react";
import moment from "moment";
const UserProfileInfo = ({ user, posts, profileId, setShowEdit }) => {
  return (
    <div className="relative py-4 px-6 md:px-8 bg-slate-950 ">
      <div className="flex flex-col md:flex-row items-start gap-6 ">
        <div
          className="w-32 h-32 border-4 border-white shadow-lg absolute -top-16 rounded-full
         shadow-purple-400"
        >
          <img
            src={user.profile_picture}
            alt=""
            className="absolute rounded-full z-2"
          />
        </div>

        <div className="w-full pt-16 md:pt-0 md:pl-36 ">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-100">
                  {user.full_name}
                </h1>
                <Verified className="h-6 w-6 text-blue-300"></Verified>
              </div>
              <p className="text-gray-400">
                {" "}
                {user.username ? `@${user.username}` : "Add a username"}
              </p>
            </div>

            {/* {if user is not on others profile that means he is opening his profile so we will give edit button} */}
            {!profileId && (
              <button
                onClick={() => setShowEdit(true)}
                className=" flex items-center gap-2 border border-slate-400 bg-transparent
                 hover:bg-gray-300
                 hover:text-slate-900 cursor-pointer
                 px-4 py-2 rounded-lg font-medium transition-colors mt-4 md:mt-0"
              >
                <PenBox className="w-4 h-4"></PenBox>
                Edit
              </button>


            )}

           {
            
           }
            

          </div>
          <p className="text-gray-600 text-sm max-w-md mt-4">{user.bio}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mt-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4"></MapPin>
              {user.location ? user.location : "Add Location"}
            </span>

            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4"></Calendar>
              Joined <span>{moment(user.createdAt).fromNow()}</span>
            </span>
          </div>
           
           <div className="flex items-center gap-6 mt-6 border-t border-gray-500 pt-4">
              <div className="flex flex-wrap gap-2 items-center">
               <span className="sm:text-xl font-bold text-gray-100">{posts.length}</span> 
               <span className="sm:text-sm font-bold text-gray-500">Posts</span> 
              </div>

              <div className="flex flex-wrap gap-2 items-center">
               <span className="sm:text-xl font-bold text-gray-100">{user.followers.length}</span> 
               <span className="sm:text-sm font-bold text-gray-500">Followers</span> 
              </div>

               <div className="flex flex-wrap gap-2 items-center">
               <span className="sm:text-xl font-bold text-gray-100">{user.following.length}</span> 
               <span className="sm:text-sm font-bold text-gray-500">Following</span> 
              </div>

           </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
