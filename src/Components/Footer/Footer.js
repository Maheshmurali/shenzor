import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


function Footer() {
  return (
    <div className='grid gap-4 p-2 sm:flex md:m-2 md:flex  md:gap-4 mt-12 md:justify-evenly justify-evenly'>
      <div className="min-h-[100px] flex-none w-30 flex-col md:flex  text-center md:justify-center">
           <div id="location" className="flex-col justify-items-center text-center">
           <span><IoLocationSharp className="md:text-4xl text-2xl "/></span>
           <p>Riyadh</p>
          </div>  
      </div>
      <div className='flex-initial w-30 min-h-[100px] md:flex flex-col text-center md:justify-center'>
        <div id="contactNumber" className="flex-col justify-items-center align-middle ">
             <span className=""><FaPhoneAlt className="md:text-4xl text-2xl"/></span>
             <p>+(966) 55 984 5411</p>
        </div>
      </div>
      <div className="min-h-[100px] flex-initial w-30  md:flex flex-col text-center md:justify-center">
        <div id="mail" className="flex-col justify-items-center align-middle ">
          <span className=""><MdAlternateEmail className="md:text-4xl text-2xl"/></span>
          <p>info@shenzor.com</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer


