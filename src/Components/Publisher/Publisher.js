import React, { useContext, useState,useEffect } from 'react'
import Vision from "../../Images/2030.png"
import { FirebaseContex } from '../../Store/FirebaseContext'

function Publisher() {
  const [news,setNews] = useState([])
  const {firebase} = useContext(FirebaseContex)
  useEffect(()=>{
    firebase.firestore().collection('news').get().then((snap)=>{
      const allnews = snap.docs.map((news)=>{
        return{
          ...news.data(),
          id:news.id
        };
      });
      console.log(allnews)
      setNews(allnews)
    })
  },[])
  return  <div className='p-2 m-5'>
    <div className='w-full p-2 text-center bg-gray-100 rounded-lg shadow-md hover:shadow-xl'>
    <h1 className='text-3xl pt-8 py-4'>Demo News Lettes</h1>
    
    </div>
{ news.map((obj)=>{
     return <div className='w-full bg-slate-200 p-4 rounded-lg mt-4 hover:shadow-xl justify-between md:flex flex-none' key={obj.id}>
      <div className='flex-initial w-50'>
        <img className='w-[800px] h-48' src={obj.ImageURL? obj.ImageURL : null} alt="" />
      </div>
  <div className='text-center flex-initial w-50'>
    <h1 className='text-2xl '>{obj.title}</h1>
    <p className='text-gray-700 mt-4'>{obj.content}</p>
    <div id='timestamp' className='justify-items-end mt-12'>
  <p className='text-gray-500'>{obj.Published ? obj.Published : null}</p>
  </div>
  </div>
  
</div>
})}
    <div className='w-full flex justify-center mt-8'>
       <div><img src={Vision} alt="" /></div> 
      </div>
      <div className='mt-4 shadow-lg bg-yellow-300 rounded-lg'>
      </div> 
  </div>
  
}

export default Publisher

