import React, { useEffect, useState } from 'react'
import {  dummyRecentMessagesData } from '../assets/assets'
import { Link } from "react-router-dom"
import moment from 'moment'

const RecentMessages = () => {
    const [messages , setmessages] = useState([])

    const fetchRecentMessage = async()=>{
      setmessages(dummyRecentMessagesData)
    }
    useEffect(()=>{
        fetchRecentMessage()
    } , [])
  return (
    <div className='bg-gray-800 max-w-xs mt-4 p-4 min-h-20 rounded-md text-xs text-slate-100' >
      <h3 className='font-semibold mb-4 text-slate-100'>Recent Messages</h3>
      <div className='flex flex-col max-h-56 overflow-y-scroll no-scrollbar'>

        {
            messages.map((message , index)=>(
                <Link to={`/messages/${message.from_user_id._id}`} key={index} className='flex items-start gap-2 py-2 rounded-sm px-1 hover:bg-slate-500'>
                    <img className='w-8 h-8 rounded-full' src={message.from_user_id.profile_picture}/>
                    <div className='w-full'>

                    <div className='flex justify-between' >
                           <p className='font-medium'>{message.from_user_id.full_name}</p>
                           <p className='text-[10px] text-slate-300'>{moment(message.createdAt).fromNow()}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-gray-400'>{message.text ? message.text : "media"}</p>
                        {
                            !message.seen && <p className='bg-indigo-500 text-white w-4 h-4 flex 
                            items-center justify-center rounded-full text-[10px]'>1</p>
                        }
                    </div>

                    </div>
                    
                 
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default RecentMessages