import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import { dummyPostsData, dummyUserData } from '../assets/assets'
import Loading from '../Components/Loading'
import UserProfileInfo from '../Components/UserProfileInfo'
import PostCard from '../Components/PostCard.jsx'
import moment from 'moment'
import EditProfile from '../Components/EditProfile.jsx'

const Profile = () => {
  const {profileId} = useParams()
  
  const [user , setuser] = useState(null)
  
  const [post , setpost] = useState([])
  const [activeTab , setActiveTab] = useState('post')
  const [showEdit , setShowEdit] = useState(false)
   
  const fetchUser = async()=>{
    setuser(dummyUserData)
    setpost(dummyPostsData)
  }

  useEffect(()=>{
    fetchUser()
  } , [])


  return user  ? (
    <div className='relative h-full overflow-y-scroll no-scrollbar bg-gradient-to-b from-slate-600 to-black '>
       <div className='max-w-3xl mx-auto  mb-4  '>
           {/* {Profile card}    */}
           <div className='bg-slate-500 rounded-2xl overflow-hidden'>
            {/* {cover_photo} */}
             <div className='h-40 md:h-56 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200'>
               {
                user.cover_photo  && <img  src={user.cover_photo} alt=''
                  className='w-full h-full object-cover'
                />

               }
             </div>

            {/* {userinfo} */}
            <UserProfileInfo user={user} posts ={post} profileId={profileId} setShowEdit={setShowEdit}>

            </UserProfileInfo>

           </div>

           {/* {Tab} */}
           <div className='max-sm:px-4 mt-6'>
              <div className='bg-white rounded-xl p-1 flex max-w-md mx-auto'>
              {["post" ,"media" , "likes"].map((tab)=>(
                <button onClick={()=>setActiveTab(tab)} key={tab} className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors 
                cursor-pointer ${activeTab === tab ? "bg-indigo-950 text-white" : 
                "text-gray-400 hover:text-gray-600"}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}

              </div> 

           </div>

           {/* {post} */}
           {
            activeTab == "post" && (
              <div className='max-sm:px-4 mt-4 flex flex-col items-center gap-6'>
                {
                  post.map((post)=> <PostCard key={post._id} post={post}></PostCard> )
                }
              </div>
            )
           }

           {/* Media */}
           {
            activeTab == "media" && (
              <div className='flex flex-wrap gap-2 max-sm:p-2 mt-6 max-w-6xl'>
                {
                  post.filter((post)=>post.image_urls.length > 0).map((post)=>(
                    <>
                      {
                        post.image_urls.map((image , index)=>(
                          <Link target='_blank' to={image}  key={index} className='relative group mt-2'>
                            <img src={image} key={index} className='w-62 aspect-video object-cover' alt=''/>
                            <p className='absolute rounded-l-3xl bottom-0 right-0 text-xs p-1 px-3 backdrop-blur-xl text-white opacity-0
                            group-hover:opacity-100 transition duration-300' >
                              Posted {moment(post.createdAt).fromNow()}
                            </p>
                          </Link>
                        ))
                      }
                    </>
                  ))

                }
              </div>
            )
           }

       {/* {edit profile model} */}
       </div>
       {
        showEdit && <EditProfile setShowEdit={setShowEdit}/>
       }

    </div>
  )  : (
    <Loading></Loading>
  )
}

export default Profile