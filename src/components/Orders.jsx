import React from 'react'
import Order from './Assets/Order.png'
const Orders = ({setIsSideBarOpen,setSelectedSideBarItems,setIsOrderOpen}) => {

  const handleOrder=()=>{
    setIsSideBarOpen(false)
    setIsOrderOpen(false)
    setSelectedSideBarItems(false)
  }



  return (
    <div className='w-full text-center p-10' >
      <div className='flex justify-center '>
      <img src={Order} className='w-80 h-80 rounded-full'  />
      </div>
      <h1 className='text-2xl font-bold'>You have no previous orders</h1>
      <p className='font-bold m-6'>Start ordering  today...</p>
      <button className="bg-gradient-to-l from-neutral-200 to-red-500 rounded px-4 py-2 font-bold " onClick={handleOrder}>Continue Shopping</button>
    </div>
  )
}

export default Orders