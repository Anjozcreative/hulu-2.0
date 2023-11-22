'use client'
import { useRouter } from 'next/navigation'
import request from "@/util/requests";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className='flex px-5 sm:px-20 text-2xl whitespace-nowrap space-x-6 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(request).map(([key, {title, url}]) => (
          <h2 
          key={key} 
          onClick={() => router.push(`/?genre=${key}`)}
          className='last:pr-5 cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-12 w-1/12 bg-gradient-to-l from-gray-800" />
    </nav>
  )
}

export default Nav;