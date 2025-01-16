import React from 'react'
import Vision from '../../Images/2030.png'
import Blogs from '../../Components/Blogs/Blogs'
function Home() {
  return (
    <div className='p-2 m-5'>
      <div className='w-full p-2 text-center bg-gray-100 rounded-lg shadow-md'>
      <h1 className='text-3xl pt-8 py-4'>Demo News Lettes</h1>
      
      </div>
      <div className='w-full bg-slate-200 p-4 rounded-lg mt-4'>
        <div className='text-center '>
          <h1 >Current Tasks</h1>
          <p>New announancements</p>
        </div>
      </div>
      <div className='w-full flex justify-center mt-8'>
         <div><img src={Vision} alt="" /></div> 
        </div>
        <div className='mt-4 shadow-lg bg-yellow-300 rounded-lg'>
        <Blogs />
        </div>
        
    </div>
  )
}

export default Home
