import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <div className='bg-red-500 shadow-lg px-20 text-center  '>
       
        <div>
           <h1 className='font-bold text-xl p-2 '>You can find us at</h1> 
           <div className='flex justify-center items-center gap-2'>
            <a href='https://www.facebook.com/'  target='blank'><ImFacebook2  size={20}/></a>
           <a href='https://www.instagram.com/' target='blank'><FaInstagramSquare size={20} /></a>
           <a href='https://twitter.com/?lang=en' target='blank'><FaSquareTwitter size={20}/></a>
           <a href='https://www.youtube.com/' target='blank'> <IoLogoYoutube  size={20}/></a>
          
           </div>
          
        </div>
    <div className='grid grid-cols-3 gap-10 '>
        <div className='p-2'>
            <h1 className='text-lg font-bold text-center'>ShopEase

            </h1>
            <p className='text-center'>
"Explore fashionable attire for men and women, plus the latest electronics and chic accessories for women. "</p>
        </div>
      
        <div className='p-2'>
            <div className=''>
                
                <h1 className='text-lg font-bold '>Locate Us</h1>
                <p className='text-center'>123, App Street
Chennai, Tamil Nadu</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold '>Mail</h1>
                    <p>shope_ease@gmail.com</p>
                </div>
        </div>
        <div className='p-2text-center'>
            <h1 className='text-lg font-bold '>Contact Us</h1>
            <p>+91 7778228900</p>
            <p>+91 9134111511</p>
            <p>+044 227 8167</p>
         
            <div>
                
            </div>
        </div>
        </div>
    
        </div>
  )
}

export default Footer