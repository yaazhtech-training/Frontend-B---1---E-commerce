import { useState } from "react";
import React from 'react'
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { ImFontSize } from 'react-icons/im';
import Sidebar from "./Sidebar";
import {  useNavigate } from "react-router-dom";

const Profile = ({ setIsSideBarOpen,setIsProfileOpen,setSelectedSideBarItems}) => {
  const navigate=useNavigate()
  const[showPopup,setShowPopup]=useState(false)

  const[profileData,setProfileData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    birthday:'',
    gender:''

  })

  const handleGender=(e)=>{
    const gender={...profileData,gender:e.target.value}
setProfileData(gender)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setShowPopup(true)
  }

  const handleOk=()=>{
    setIsSideBarOpen(false)
    setIsProfileOpen(false)
    setSelectedSideBarItems(false)
  }


  
  return (
    <>
   
    <div className={`flex justify-center relative  ${showPopup ? 'blur-lg': ''} `}>
     
    

      <form className='p-2   '>
      <h1 className=' text-xl py-3  font-bold ' >Profile Info</h1>
        <div className='flex gap-6 mb-4  font-semibold '   >
        <div  className='w-96 '>
          
        <label className='w-full block  mb-2 '>First name</label>
        <input className=' w-full block  mb-2 border-2 border-gray-200 p-2 focus:outline-gray-400 ' type='text' 
        value={profileData.firstName}
        onChange={(e)=>setProfileData({...profileData ,firstName:e.target.value})}
        />
         </div>
         <div className='w-96' >
        <label className='mb-2  block w-full  '>Last name</label>
        <input
       className='w-full  block mb-2  border-2 border-gray-200 p-2  focus:outline-gray-400 ' type='text ' 
       value={profileData.lastName}
       onChange={(e)=>setProfileData({...profileData ,lastName:e.target.value})}/>
        </div>
        </div>
        <div className='flex gap-6 font-semibold '>
        <div className='mb-4 w-96 '><label className='mb-2  block w-full  '>Email</label>
        <input
       className='mb-2 block  w-full border-2 border-gray-200 p-2  focus:outline-gray-400  '  type='e-mail'
       value={profileData.email}
       onChange={(e)=>setProfileData(e.target.value)}/></div>
        <div className='mb-4 w-96'>
        <label  className=' block  mb-2 w-full ' >Phone number</label>
        <input
        className='block  w-full border-2 border-gray-200 p-2 focus:outline-gray-400 'type='tel'
        value={profileData.phoneNumber}
        onChange={(e)=>setProfileData({...profileData ,phoneNumber:e.target.value})} />
        </div>
        </div>
        <div className='flex gap-6 font-semibold'>
        <div className='mb-4 w-96 '> 
        <label className=' block  mb-2  w-full'>Birthday</label>
        <input
          className='mb-2 block  w-full  border-2 border-gray-200 p-2  focus:outline-gray-400 uppercase ' type='date'
          value={profileData.birthday}
          onChange={(e)=>setProfileData({...profileData, birthday:e.target.value})}  />
        </div>
       <div className='mb-4  ' >
       <label className='  block  mb-2 '>Gender</label>
       <div className='flex gap-4 '>
       <div className='relative'>
       <label className='block    '> <FaMale  style={{fontSize:'20px',color:'red'}}/></label>
        <input type='radio' name='gender' value='male' checked={profileData.gender==='male' } className='absolute top-6 left-1'onChange={handleGender}
        />
        </div>
        <div className='relative'>
        <label > <FaFemale  style={{fontSize:'20px',color:'red'}} /></label>
        <input  className='absolute top-6 left-1' type='radio' name='gender' value='female' checked={profileData.gender==='female'} onChange={handleGender}
        
        />
       </div>
       </div>
       </div>
        </div>
       <div className="py-2">
       <button className="bg-gradient-to-l from-neutral-200 to-red-500 rounded px-4 py-2 font-bold " onClick={handleSubmit}>Submit</button>
       </div>
      
      </form>
      
    </div>
    
    {showPopup && (
         <div className="border-2  w-96 m-auto  shadow-lg absolute top-1/2 right-20 left-10">
         <h3 className="text-xl text-center p-2">Your Informations are saved</h3>
         <div className="text-center mt-3">
         <button className="bg-gradient-to-l from-neutral-200 to-red-500 rounded px-4 py-2 font-bold  "onClick={handleOk}>OK</button>
         </div>
       </div>
    ) }
 
</>
  )
}

export default Profile