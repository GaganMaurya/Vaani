import React from 'react'

const Loading = ({height = "100vh"}) => {
  return (
    <div style = {{height}} className='flex items-center justify-center h-screen'>
        <div className='h-10 w-10 rounded-full border-3  border-amber-600 border-t-transparent animate-spin'>

        </div>
    </div>
  )
}

export default Loading