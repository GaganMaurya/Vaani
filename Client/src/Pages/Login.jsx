import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import {SignIn} from "@clerk/clerk-react"

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
    <img src={assets.bgImage} className='absolute top-0 left-0 -z-1 w-full h-full object-cover' ></img>

     <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
      <img src={assets.applogo} className='h-20 object-contain' ></img>
      <div>
        <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
          <img src={assets.group_users} className='h-8 md:h-10'></img>
          <div>
            <div className='flex'>
              {Array(5).fill(0).map((_ , i)=>(<Star key={i} className='size-4 md:size-4.5 text-transparent
               fill-amber-500'/>))}
            </div>
            <p>Used by 5k+ developers</p>
          </div>
        </div>
        <h1 className='text-3xl md:text-5xl md:pb:2 font-bold bg-gradient-to-r from-white to bg-white
        bg-clip-text text-transparent'>Let's connect with the world -- By VAANI </h1>
        <p className='text-xl mt-4 md:text-2xl font-bold underline underline-offset-6 text-black max-w-72 md:max-w-md'>Your Voice, Your Space, Your VAANI.</p>
      </div>
      <span className='md:h-10'></span>
     </div>
     {/*Login form */}
     <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
         <SignIn></SignIn>

     </div>

    </div>
  )
}

export default Login