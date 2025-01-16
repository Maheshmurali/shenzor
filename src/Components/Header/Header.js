import React from 'react';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-2 md:gap-4 m-2 shadow-xl rounded-lg w-full">
        <div className="min-h-[70px] rounded-2xl flex justify-between">
          <Link to={"/"}>
          <img src={logo} alt="Logo" className="justify-self-center p-4 max-h-[100px] rounded-sm" />
          </Link>
          <div className="p-6 md:hidden mt-2"></div>
        </div>
        <div className="min-h-[70px] rounded md:block">
          <nav className=''>
            <ul className="md:flex md:gap-32 justify-evenly p-4">
              <li className="my-2  md:my-0 hover:cursor-pointer hover:bg-blue-600 p-1 hover:rounded-lg hover:text-white relative after:border-t after:border-gray-300 after:absolute after:w-full after:bottom-0 after:left-0 md:after:border-none">
                <Link to="/">Home</Link>
              </li>
              <li className="my-2 md:my-0 hover:cursor-pointer hover:bg-blue-600 p-1 hover:rounded-lg hover:text-white relative after:border-t after:border-gray-300 after:absolute after:w-full after:bottom-0 after:left-0 md:after:border-none">
                About
              </li>
              <li className="my-2 md:my-0 hover:cursor-pointer hover:bg-blue-600 p-1 hover:rounded-lg hover:text-white relative after:border-t after:border-gray-300 after:absolute after:w-full after:bottom-0 after:left-0 md:after:border-none">
              <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

