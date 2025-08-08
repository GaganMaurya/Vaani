import React, { useEffect, useRef, useState } from "react";
import { dummyMessagesData, dummyUserData } from "../assets/assets";
import { ImageIcon, SendHorizonal } from "lucide-react";

const ChatBox = () => {
  const messages = dummyMessagesData;
  const [text, setText] = useState("");
  const [image, setImages] = useState(null);
  const [user, setUser] = useState(dummyUserData);
  const messagEndRef = useRef(null);

  const sendMessgae = async () => {};

  useEffect(() => {
    messagEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    user && (
      <div className="flex flex-col h-screen">
        {/* {title bar} */}
        <div
          className="flex items-center gap-2 p-2 md:px-20 xl:pl-42 bg-gradient-to-r from-slate-800 to-purple-700
      border-b border-gray-300"
        >
          <img
            src={user.profile_picture}
            alt=" "
            className="size-8 rounded-full"
          />
          <div>
            <p className="font-medium">{user.full_name}</p>
            <p className="text-sm text-gray-500 -mt-1.5">@{user.username}</p>
          </div>
        </div>
        {/* {chat} */}
        <div className="p-5 md:px-10 h-full no-scrollbar overflow-y-scroll">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages
              .toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
              .map((message, index) => (
                <div
                  key={index}
                  className={`flex flex-col 
            ${message.to_user_id !== user._id ? "items-start" : "items-end"}`}
                >
                  <div
                    className={`p-2 text-sm max-w-sm text-white  shadow-sm shadow-blue-200 
            rounded-lg  ${
              message.to_user_id !== user._id
                ? "rounded-bl-none bg-slate-700"
                : "rounded-br-none bg-slate-950"
            }`}
                  >
                    {message.message_type === "image" && (
                      <img
                        src={message.media_url}
                        className="cursor-pointer w-full max-w-sm
                 rounded-lg mb-1"
                        alt=""
                      />
                    )}

                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            <div ref={messagEndRef}/>
          </div>
          </div>

          {/* {send message bottom input bar} */}
          <div className="px-4">
            <div
              className="flex items-center gap-3 pl-5 p-1.5 bg-transparent w-full max-w-xl mx-auto border border-gray-200
            rounded-full mb-5"
            >
              <input
                type="text"
                className="flex-1 outline-none text-slate-200 bg-transparent"
                placeholder="Type a message...."
                onKeyDown={(e) => e.key === "Enter" && sendMessgae()}
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></input>
              <label htmlFor="image">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="h-8 rounded mr-3"
                  />
                ) : (
                  <ImageIcon className="size-7 mr-3  text-gray-500 cursor-pointer " />
                )}
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  hidden
                  onChange={(e) => setImages(e.target.files[0])}
                ></input>
              </label>

              <button onClick={sendMessgae} className="active:scale-95 cursor-pointer text-white p-2 rounded-full">
                <SendHorizonal className="text-white" size={18}/>
              </button>
            </div>
          </div>


        
      </div>
    )
  );
};

export default ChatBox;
