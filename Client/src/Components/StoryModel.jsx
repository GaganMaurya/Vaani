import React, { useState } from 'react'
import { ArrowLeft, Sparkle, TextIcon, Upload } from "lucide-react";
import toast from 'react-hot-toast';

const StoryModel = ({setShowmodel , fetchStories}) => {
    const bgColors = ["#111fff"  , "#ff00ff" , "#00ffff" , "#ffff00"  , "#ca8a04" , "#111"] 
    const [mode , setMode] = useState("text")
    const [background , setbackground] = useState(bgColors[0])

    const [text , settext] = useState("")
    const [media , setMedia] = useState(null)
    const [previewUrl , setpreviewUrl] = useState(null)
     
    const handleMediaUpload = (e)=>{
        const file = e.target.files?.[0]
        if(file){
            setMedia(file)
            setpreviewUrl(URL.createObjectURL(file))

        }
    }
    
    const handleCreateStory = async ()=>{

    }

  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center 
    justify-center p-4'>
        <div className='w-full max-w-md'>
            <div className='flex justify-between items-center mb-4 text-center '>
                <button onClick={()=>setShowmodel(false)} className='text-white p-2 cursor-pointer'>
                    <ArrowLeft/>
                </button>
                <h2 className='text-lg font-semibold'>Create Story</h2>
                <span className='w-10'></span>
            </div>
             
             <div className='rounded-lg h-96 flex items-center justify-center relative'
             style={{backgroundColor : background}}>
             {
                mode === "text" && (
                    <textarea name='' id='' className='bg-transparent text-white w-full h-full p-6 text-lg 
                    resize-none focus:outline-none' placeholder="What's in your mind" 
                        onChange={(e) => settext(e.target.value) } value={text}
                    />
                )
             }
             {
                mode === 'media' && previewUrl && (
                    media?.type.startsWith('image') ? (
                        <img src={previewUrl} className='object-contain  max-h-full'/>
                    )
                 : (
                    <video src={previewUrl} className="object-contain max-h-full" controls></video>
                )
                )
             }

             </div>

             <div className='flex mt-4 gap-2'>
                {bgColors.map((color)=>(
                    <button key={color}  className='w-6 h-6 rounded-full ring cursor-pointer' 
                    style={{backgroundColor : color}} onClick={()=>setbackground(color)}></button>
                ))}

             </div>

             <div className='flex gap-2 mt-4'>
              <button onClick={()=>{setMode('text') ; setMedia(null) ; setpreviewUrl(null)}} className={`flex-1 
              flex items-center cursor-pointer justify-center gap-2 p-2 rounded 
              ${mode=== "text" ? 
              "bg-white text-black " : "bg-zinc-400" }`}>
                <TextIcon size={18}/> Text
              </button>
              <label className={`flex-1 flex items-center cursor-pointer justify-center gap-2 p-2 rounded 
              ${mode=== "media" ? 
              "bg-white text-black " : "bg-zinc-800" }`}>
                <input onChange={(e)=>{handleMediaUpload(e) ; setMode('media')}} type="file" accept='image/* , video/*'  className='hidden'></input>
                 <Upload size={18}/> Photo/Video

              </label>
               </div>
               <button  onClick={()=>toast.promise(handleCreateStory(),{
                loading : 'Saving...' , success : <p>Story Added</p> , error : e=> <p>{e.message}</p>
               })} className='flex w-full items-center justify-center gap-2 py-2.5 mt-6  rounded-lg
           bg-gradient-to-r from-indigo-950 to-purple-950 hover:from-purple-950 hover:to-indigo-950 active:scale-95
           transition text-white cursor-pointer '>
                 <Sparkle size={18}/> Create Story
               </button>

        </div>
    </div>
  )
}

export default StoryModel