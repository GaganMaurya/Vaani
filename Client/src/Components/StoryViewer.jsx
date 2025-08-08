import { BadgeCheck, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const StoryViewer = ({viewStory , setViewStory}) => {
    const [progress , setProgress] = useState(0)

    useEffect(()=>{
      let timer , progressInterval;
      if(viewStory && viewStory.media_type !== 'video'){
        setProgress(0)
        const duration = 10000   //milliseconds
        const setTimes = 100 //milliseconds
        let elapsed = 0

       progressInterval =  setInterval(()=>{
            elapsed += setTimes
            setProgress((elapsed/ duration)*100)
        },setTimes)

        // close story after 10sec

        timer = setTimeout(()=>{
             clearInterval(progressInterval)
             setViewStory(null)
        }, duration)
      } 

      return ()=>{
        clearTimeout(timer)
        clearInterval(progressInterval)
      }
    },[viewStory , setViewStory])

    
  return (
    <div className='fixed inset-0 h-screen bg-black bg-opacity-90 z-110 flex items-center justify-center ' 
    style={{backgroundColor : viewStory.media_type === 'text' ? viewStory.background_color : '#00000'}}>
     
     {/* {progressbar} */}
     <div className='absolute top-0 left-0 w-full h-1 bg-gray-700'>
        <div className='h-full bg-white transition-all duration-100 linear' 
        style={{width : `${progress}%` , transition : 'ease'}}>

        </div>
     </div>

     {/* {user info - top left} */}
     <div className='absolute top-4 left-4 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 
     backdrop-blur-2xl
     rounded bg-black/50'>
        <img src={viewStory.user?.profile_picture} className='size-7 sm:size-8 rounded-full object-cover
        border border-white'/>
         <div className='text-white font-medium flex items-center gap-1.5'>
            <span>{viewStory.user?.full_name}</span>
            <BadgeCheck size={18}/>
         </div>   
        
     </div>
     {/* {close button} */}
     <button  onClick={()=>setViewStory(null)} className='absolute top-6 right-8 w-8 h-8 hover:scale-110 transition cursor-pointer'>
        <X/>
     </button>

     {/* {Content wrpper} */}
     <div className='max-w-[90vw] max-h-[90vh] flex items-center justify-center'>
        {
            viewStory.media_type === "text" ? <p className='p-8 text-center text-xl max-h-screen max-w-full overflow-hidden md:text-3xl'>{viewStory.content}</p> : 
            viewStory.media_type === "img" ? <img src={viewStory.media_url} className='p-4 max-w-full max-h-screen object-contain '/> :
            <video onEnded={()=>setViewStory(null)} src={viewStory.media_url} controls autoPlay className='p-4 max-w-full max-h-screen  md:w-[60vw] h-[60vh]' />
        }

     </div>
    </div>
  )
}

export default StoryViewer