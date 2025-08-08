import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loading from '../Components/Loading'

const Layout = () => {
  const user = dummyUserData
  const [sidebarOpen , setSidebarOpen] = useState(false)
  return user ?  (
    <div className='w-full flex h-screen no-scrollbar'>

     <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></SideBar>

     <div className='flex-1 bg-slate-900'>
       <Outlet/>
     </div>
    {
      sidebarOpen ? <X className="absolute top-3 right-3 p-2 z-100 bg-white 
      rounded-md shadow w-10 h-10 text-gray-600 sm:hidden" onClick={()=>setSidebarOpen(false)} ></X>
      : <Menu className='absolute top-3 right-3 p-2 z-100 bg-white 
      rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'  onClick={()=>setSidebarOpen(true)}></Menu>
    }
    </div>
  ) : (
    <h1><Loading/></h1>
  )
}

export default Layout