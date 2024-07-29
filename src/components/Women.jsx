import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { FaShoppingBag } from "react-icons/fa";

const Women = ({ wishList,handleAddWishList,handleRemoveWishList,cart,handleAddCart,searchInput}) => {
    const[store,setStore]=useState([])

useEffect(()=>{
    fakeStore()
},[])

const fakeStore=()=>{
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then(response=>{
        setStore(response.data)
    })
    .catch((error)=>console.log(error))
}

    return (
      <div className=" m-10  ">
      <div className="grid grid-cols-4 gap-10  ">
        {/* {store.map((values,index)=>( */}
        {store
          .filter(
            (values) =>
              values.title
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              values.category
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          )

          .map((values, index) => (
            <div
              key={index}
              className=" relative overflow-hidden  rounded-lg   shadow-xl "
            >
              {/* <div className="bg-gradient-to-l from-red-800 to-gray-100 p-3   "> */}
              <div className="bg-white p-3   ">
                <img
                  src={values.image}
                  alt="store"
                  className="w-full h-64 object-contain hover:scale-105 ease-in-out duration-300 delay-300"
                />
                <div className="absolute right-2  top-5 ">
                  {wishList.includes(values) ? (
                    <FaShoppingBag
                      style={{ fontSize: "20px", color: "#8B0000" }}
                      onClick={() => handleRemoveWishList(values)}
                    />
                  ) : (
                    <FaShoppingBag
                      style={{ fontSize: "20px" }}
                      onClick={() => handleAddWishList(values)}
                    />
                  )}
                </div>
              </div>
              <div className="bg-white p-5 text-center">
                <div className="font-bold text-md  h-16">
                  {values.title}
                </div>
                <p className=" text-md">Price:{values.price}</p>

                {/* {cart.includes(values)? */}
                {cart.some((cartItem) => cartItem.id === values.id) ? (
                  <div className=" pt-4 pb-2">
                    
                    <button className=" w-full bg-gradient-to-l from-red-900 to-red-500 border-none    font-bold py-2 px-4 rounded-full ">
                      Added to Cart
                    </button>     
                  </div>
                ) : (
                  <div className="pt-4 pb-2">
                  
                    <button
                      className=" bg-gradient-to-l from-red-900 to-red-500 order-none font-bold py-2 px-4 rounded-full w-full "
                      onClick={() => handleAddCart(values)}
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
      );
}

export default Women
