import React from 'react'
import 'boxicons/css/boxicons.min.css'

const Header = () => {
  return (
    <header className='z-10 flex justify-between mb-24 pt-10 items-center'>
        <div className='lg:text-5xl font-extrabold text-2xl text-white'>
            ToneCraft

        </div>
        <div className='text-white flex gap-5'>
            <a className='text-2xl hover:text-gray-500 duration-300' href="#"><i class="bx bxl-twitter"></i></a>
            <a className='text-2xl hover:text-gray-500 duration-300' href="#"><i class="bx bxl-instagram"></i></a>
            <a className='text-2xl hover:text-gray-500 duration-300' href="#"><i class="bx bxl-github"></i></a>
            <a className='text-2xl hover:text-gray-500 duration-300' href="#"><i class="bx bxl-youtube"></i></a>
        </div>
    </header>
  )
}

export default Header