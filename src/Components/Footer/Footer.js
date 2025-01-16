import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


function Footer() {
  return (
    <div className='grid gap-4 p-2  md:m-2 md:flex  md:gap-4 mt-12 md:justify-evenly justify-evenly'>
      <div className='min-h-[100px] flex flex-col justify-center text-center'>
             <span className="md:px-32 px-40 py-2"><IoLocationSharp className="md:text-4xl text-2xl ml-12 md:ml-0"/><br/><p>Riyadh</p></span>  
      </div>
      <div className='flex min-h-[100px]  justify-center flex-col text-center'>
        <span className="md:px-32 px-40 py-2"><FaPhoneAlt className="md:text-4xl text-2xl ml-12"/><br/><p>+(966) 55 984 5411</p></span>
      </div>
      <div className='min-h-[100px]  flex justify-center flex-col text-center'>
        <span className="md:px-24  px-40 lg:px-4 py-2"><MdAlternateEmail className="md:text-4xl text-2xl ml-12"/><br/><p>info@shenzor.com</p></span>
      </div>
    </div>
  )
}

export default Footer
