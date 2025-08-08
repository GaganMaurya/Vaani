import React, { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { Pencil } from "lucide-react";

const EditProfile = ({setShowEdit}) => {
  const user = dummyUserData;
  const [editForm, setEditForm] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    fullname: user.full_name,
    cover_photo: null,
  });

  const handleSaveProfile = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-0 z-110 h-screen overflow-y-scroll bg-black/50">
      <div className="max-w-2xl sm:py-6 mx-auto">
        <div className="bg-gray-900 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-200 mb-6">
            Edit Profile
          </h1>
          <form className="space-y-4 " onSubmit={handleSaveProfile}>
            {/* {profile picture} */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Profile Picture
                <input
                  type="file"
                  accept="image/*"
                  id="profile_picture"
                  className="w-full p-3 border border-r-gray-200 rounded-lg"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      profile_picture: e.target.files[0],
                    })
                  }
                  hidden
                />
                <div className="group/profile relative">
                  <img
                    src={
                      editForm.profile_picture
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                    className="w-24 h-24 rounded-full object-cover mt-2"
                  />
                  <div
                    className="absolute hidden group-hover/profile:flex cursor-pointer inset-0 bg-black/70 rounded-full 
                     items-center justify-center"
                  >
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            {/* {Cover Photo}   */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover_photo"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Cover Picture
                <input
                  type="file"
                  accept="image/*"
                  id="cover_photo"
                  className="w-full p-3 border border-r-gray-200 rounded-lg"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      cover_photo: e.target.files[0],
                    })
                  }
                  hidden
                />
                <div className="group/cover relative">
                  <img
                    alt=""
                    src={
                      editForm.cover_photo
                        ? URL.createObjectURL(editForm.cover_photo)
                        : user.cover_photo
                    }
                    className="w-80 h-40 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200
                      rounded-sm object-cover mt-2"
                  />
                  <div
                    className="absolute hidden group-hover/cover:flex cursor-pointer inset-0 bg-black/70 rounded-sm 
                     items-center justify-center"
                  >
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>
               
            {/* {full name }    */}
            <label className="block text-sm font-medium text-gray-100 mb-1">
                Name
            </label>
            <input type="text" className="w-full border p-3 border-gray-200 bg-transparent rounded-lg"
            placeholder="Please enter your full name" 
            onChange={(e)=>setEditForm({...editForm , fullname : e.target.value})}
            value={editForm.fullname}>

            </input>

            {/* {username} */}
             <label className="block text-sm font-medium text-gray-100 mb-1">
                Name
            </label>
            <input type="text" className="w-full border p-3 border-gray-200 bg-transparent rounded-lg"
            placeholder="Please enter a username" 
            onChange={(e)=>setEditForm({...editForm , username : e.target.value})}
            value={editForm.username}>

            </input>

             {/* {bio} */}
             <label className="block text-sm font-medium text-gray-100 mb-1">
                Bio
            </label>
            <textarea rows={3}  className="w-full border p-3 border-gray-200 bg-transparent rounded-lg"
            placeholder="Please enter your bio details.. " 
            onChange={(e)=>setEditForm({...editForm , bio : e.target.value})}
            value={editForm.bio}>

            </textarea>

             
            {/* {loaction} */}
             <label className="block text-sm font-medium text-gray-100 mb-1">
                Location
            </label>
            <input type="text" className="w-full border p-3 border-gray-200 bg-transparent rounded-lg"
            placeholder="Please enter your location" 
            onChange={(e)=>setEditForm({...editForm , location : e.target.value})}
            value={editForm.location}>

            </input>

            <div type="button" className="flex justify-end space-x-3 pt-6">
            <button onClick={()=>setShowEdit(false)} className="px-4 py-2 border border-gray-300 rounded-lg
             text-gray-200 cursor-pointer "> Cancel</button>
            <button type="submit" onClick={handleSaveProfile} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 
            text-white rounded-lg hover:from-indigo-600 hover:to-purple-700
            transition cursor-pointer">Save Chanages</button>

            </div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
