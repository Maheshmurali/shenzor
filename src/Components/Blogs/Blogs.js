import React from 'react'
import img from "../../Images/Blog-Img.jpg"
import { Link } from 'react-router-dom';
function Blogs() {
  return (
    <div className='p-2 m-5 shadow-lg bg-gray-100 rounded-md'>
      <article className="flex bg-white transition hover:shadow-xl">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>2016</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>2025</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56 md:rounded-md">
    <img
      alt=""
      src={img}
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      
        <h3 className="font-bold uppercase text-gray-900">
        We Are The Leading Developer of Integrated CCTV Inspection Systems in KSA and The Region.
        </h3>
      

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
      Founded in 2016 in Saudi Arabia, 2nd industrial city in Riyadh. SHENZOR products portfolio includes robot crawlers, reporting and analysis system and integrated inspection units.
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
      <Link
        to={'/'}
        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Read More
      </Link>
    </div>
  </div>
</article>
    </div>
  )
}

export default Blogs
