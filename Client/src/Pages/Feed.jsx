import React, { useEffect, useState } from "react";
import { assets, dummyPostsData } from "../assets/assets";
import Loading from "../Components/Loading";
import StoriesBar from "../Components/StoriesBar";
import PostCard from "../Components/PostCard";
import RecentMessages from "../Components/RecentMessages";

const Feed = () => {
  const [feeds, setfeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchfeeds = async () => {
    setfeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchfeeds();
  }, []);

  return !loading ? (
    <div
      className="flex h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 
    items-start justify-center xl:gap-8 bg-gradient-to-b from-slate-600 to-black"
    >
      {/* {story and post list} */}
      <div >
        <StoriesBar />
       
          {feeds.map((feed, index) => (
            <PostCard key={index} post={feed} />
          ))}
        
      </div>

      {/* Right Sidebar */}
      <div className="max-xl:hidden sticky top-0 ">
        <div className="max-w-xs bg-gray-800 text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow ">
          <h3 className="text-slate-100 font-semibold ">Sponsored</h3>
          <img src={assets.sponsored_img} className="w-75 h-50 rounded-md"/>
          <p className="text-slate-200">Email marketing</p>
          <p  className="text-slate-400">Get your marketing done with Vaani based AI -- easy-to use platform</p>
        </div>

        <RecentMessages/>

      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
