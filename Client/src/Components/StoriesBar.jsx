import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import momemt from "moment";
import StoryModel from "./StoryModel";
import StoryViewer from "./StoryViewer";

const StoriesBar = () => {
  const [stories, setstories] = useState([]);
  const [showModel, setShowmodel] = useState(false);
  const [viewStory, setViewStory] = useState(null);

  const fetchStories = async () => {
    setstories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="w-screen sm:w-[calc(100vw -240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">
        {/* add story card */}
        <div
          onClick={() => setShowmodel(true)}
          className="rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer 
            hover:shadow-lg transition-all duration-200 border-2 border-dashed border-black active:scale-95"
        >
          <div className="h-full flex flex-col items-center justify-center">
            <div className="size-10 bg-indigo-500 rounded-full flex  items-center justify-center mb-3">
              <Plus className="h-5  w-5 text-white"></Plus>
            </div>
            <p className="text-sm font-medium text-slate-200 text-center">
              Create Story
            </p>
          </div>
        </div>
        {/* Story card */}
        {stories.map((story, index) => (
          <div
          onClick={()=>setViewStory(story)}
            key={index}
            className={`relative rounded-lg shadow min-w-30 max-h-40 cursor-pointer 
                hover:shadow-lg transition-all duration-200 active:scale-95 bg-gradient-to-b from-indigo-950 to-purple-950 hover:from-purple-950
                 hover:to-indigo-950`}
          >
            <img
              src={story.user.profile_picture}
              className="absolute size-8 top-3 left-3 z-10 
                  rounded-full ring ring-gray-100 shadow"
            />
            <p className="absolute top-18 left-3 text-white/80 text-sm truncate max-w-24">
              {story.content}
            </p>
            <p className="text-white absolute bottom-1 right-2 z-10 text-xs">
              {momemt(story.createdAt).fromNow()}
            </p>

            {story.media_type !== "text" && story.media_url && (
              <div className="absolute inset-0 z-1 rounded-lg bg-black overflow-hidden">
                {story.media_type === "video" && story.media_url ? (
                  <video
                    src={story.media_url}
                    alt=""
                    className="h-full w-full object-cover hover:scale-110
                    duration-500 opacity-70 hover:opacity-80 transition "
                  ></video>
                ) : (
                  <img
                    src={story.media_url}
                    className="h-full w-full object-cover hover:scale-110
                    duration-500 opacity-70 hover:opacity-80 transition "
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* {Add story model} */}
      {showModel && (
        <StoryModel setShowmodel={setShowmodel} fetchStories={fetchStories} />
      )}

      {/* {View story model} */}

      {
        viewStory && <StoryViewer viewStory={viewStory} setViewStory={setViewStory}></StoryViewer>
      }
    </div>
  );
};

export default StoriesBar;
