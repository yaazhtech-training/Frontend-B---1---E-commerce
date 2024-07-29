import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { Route, Routes,Link } from 'react-router-dom';
import Profile from './Profile';

const Sidebar = ({handleSidebarItemClick}) => {
  return (
    <div className=' '>
        <div className='flex justify-start p-4 border-b-2 shadow-lg  '>  <span className='font-bold ml-10 text-md'>Hello,User...</span></div>

        <ul className='p-4'>
            <li className='py-5 font-semibold  cursor-pointer' onClick={() => handleSidebarItemClick("Profile")}>
              Profile</li>
            <li className='py-5 font-semibold cursor-pointer' onClick={() => handleSidebarItemClick("Your Orders")}>Your Orders</li>
            <li className='py-5 font-semibold cursor-pointer' onClick={()=>handleSidebarItemClick("Address")}>Address</li>
            <li className='py-5 font-semibold'>Logout</li>

        </ul>
       
      
    </div>
  )
}

export default Sidebar
