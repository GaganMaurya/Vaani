import React, { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { Image, X } from "lucide-react";
import toast from "react-hot-toast"

const CreatePost = () => {
  const [postContent, setpostContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = dummyUserData;
  const handlesubmit = async()=>{

  }

  return (
    <div className="h-full overflow-y-scroll no-srollbar bg-gradient-to-b from-slate-600 to-black">
      <div className="max-w-6xl mx-auto p-6">
        {/* {title} */}

        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-slate-100">Create Post</h1>
          <p className="text-slate-100 mt-2">
            Share your thoughts with the world!
          </p>
        </div>

        {/* {form} */}
        <div className="max-w-xl bg-slate-900 p-4 sm:p-8 sm:pb-3 rounded-xl space-y-4  ">
          {/* {Header} */}
          <div className="flex items-center gap-3">
            <img
              src={user.profile_picture}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="">
              <h2 className="font-semibold">{user.full_name}</h2>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
          </div>

          {/* {textarea} */}
          <textarea
            className="w-full resize-none max-h-20 mt-4 text-sm rounded-sm p-2 placeholder-gray-400"
            placeholder="What's happening ?"
            onChange={(e) => setpostContent(e.target.value)}
            value={postContent}
          />

          {/* {images} */}
          {images.length > 0 && 
            <div className="flex flex-wrap gap-2 mt-4">
              {images.map((image, i) => (
                <div key={i} className="relative group">
                  <img
                    src={URL.createObjectURL(image)}
                    className="h-20 rounded-md"
                  />
                  <div
                    onClick={() =>
                      setImages(images.filter((_, index) => index !== i))
                    }
                    className="absolute hidden group-hover:flex justify-center items-center inset-0
                   bg-black/40 rounded-md cursor-pointer"
                  >
                    <X className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          }
          {/* {bottom bar} */}
          <div className="flex items-center justify-between pt-3 border-t border-t-slate-500 ">  
            <label htmlFor="images" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300
            transition cursor-pointer">
              <Image className="size-6"/>
            </label>
            <input type="file" id="images" accept='image/*' hidden multiple 
            onChange={(e)=>setImages([...images , ...e.target.files])}/>

            <button disabled={loading} onClick={()=>toast.promise(handlesubmit() 
            ,{
              loading : 'uploading....',
              success : <p>Post Added</p>,
              error : <p>Post Not Added</p>,
              
             })}
            className="py-2.5 px-4 rounded-lg
           bg-gradient-to-r from-indigo-950 to-purple-950 hover:from-purple-950 hover:to-indigo-950 active:scale-95
           transition text-white cursor-pointer">
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
