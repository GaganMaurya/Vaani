import { Badge, BadgeCheck, Heart, MessageCircle, Share2 } from 'lucide-react'
import React, { useState } from 'react'
import moment from 'moment'
import { dummyUserData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PostCard = ({post}) => {
    const navigate = useNavigate()
  const postWithHashtag = post.content.replace(/(#[\w]+)/g, '<span class="text-indigo-400">$1</span>')

  const [likes , setLikes] = useState(post.likes_count)
  const currentuser = dummyUserData
 

   const handlelike = async()=>{

   }

  return (
    <div className='bg-gray-800 rounded-xl no-scrollbar shadow p-4 mt-4 space-y-4 w-full max-w-2xl'>
        {/* {user info} */}
        <div onClick={()=>navigate('/profile/' + post.user._id)} className='inline-flex items-center gap-3 cursor-pointer'>
            <img className='w-10 h-10 rounded-full shadow' src={post.user.profile_picture}/>
            <div>
                <div className='flex items-center space-x-1'>
                    <span>{post.user.full_name}</span>
                    <BadgeCheck className='w-4 h-4 text-blue-500'/>
                </div>
                <div className='text-sm text-gray-200'>@{post.user.username} &#8226; {moment(post.createdAt).fromNow()}</div>
            </div>

        </div>

         {/* {content} */}
        <div>
           {
            post.content && <div className='text-gray-200 text-sm whitespace-pre-line'
             dangerouslySetInnerHTML={{__html : postWithHashtag}}/>
           }
        </div>

        {/* {images} */}
        <div className='grid grid-cols-2 gap-2'>
        {post.image_urls.map((img,index)=>(
            <img src={img} key={index} 
            className={`w-full h-48 object-cover rounded-lg 
            ${post.image_urls.length === 1 && 'col-span-2 h-auto' }`}/>
        ))}
        </div>

        {/* {actions} */}
        <div className='flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-500 '>
                <div className='flex items-center gap-1'>
                    <Heart className={`w-4 h-4 cursor-pointer ${likes.includes(currentuser._id) &&
                    'text-red-500 fill-red-500'}`} onClick={handlelike}/>
                    <span>{likes.length}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <MessageCircle className={`w-4 h-4 cursor-pointer `} />
                    <span>{12}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <Share2 className={`w-4 h-4 cursor-pointer `} />
                    <span>{12}</span>
                </div>
        </div>

    </div>
  )
}

export default PostCard