import React, { useState,useContext } from 'react'
import { FirebaseContex } from '../../Store/FirebaseContext'
import { useNavigate } from 'react-router-dom'
function Forms() {
  const [title,setTitle] = useState('')
  const [content , setContent] = useState('')
  const [img ,setImg] = useState(null)
  const {firebase} = useContext(FirebaseContex)
  const navigate = useNavigate()
  const date= new Date()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (title.trim || content.trim){
      alert("Error Field Must Fill")
    }else{
    firebase.storage().ref(`/image/${img.name}`).put(img).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{firebase.firestore().collection('news').add({
        title : title,
        content : content,
        ImageURL :  url,
        Published : date.toDateString()
      }).then(()=>navigate('/'))})
    })}
  }
  return (
    <div className='bg-slate-300'>
        <div class="flex flex-col items-center justify-center h-screen shadow-lg">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">News Letters</h2>
      <form class="flex flex-col">
      <input
       type="text" 
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Title" />
      <textarea name="cover_letter" 
      value={content}
      onChange={(e)=>setContent(e.target.value)}
      class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Content"></textarea>
     <img className='hidden' alt="Posts" width="200px" height="200px" src={img ? URL.createObjectURL(img): null}></img>
    </form>
    <form className='flex flex-col'>
            <br />
            <input onChange={(e)=>setImg(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn text-white bg-blue-700 p-2 rounded-lg justify-items-center">Publish</button>
          </form>
  </div>
</div>
    </div>
  )
}

export default Forms
