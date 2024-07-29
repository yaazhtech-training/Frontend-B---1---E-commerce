import React from "react";
import Logo from "./Assets/Logo.png";
import { Link } from "react-router-dom";

import { FaShoppingBag, FaSearchLocation } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";

import { useState } from "react";
const Navbar = ({ cartCount, setSearchInput, searchInput,handleSideBar,isLoggedIn,setIsLoggedIn }) => {
  //show searchpopup
  const [showSearch, setShowSearch] = useState(false);




  return (
    <nav className="bg-red-500  shadow-lg ">
      <div className="flex justify-between items-center text-black">
        <div className="flex items-center">
          <img src={Logo} width={90} alt="logo" />
          <div>
            <h2 className="font-bold text-4xl">ShopEase</h2>
          </div>
        </div>
        <div className="m-10 flex items-center">
          <input
            className="outline-none rounded-lg px-4 py-1 text-base text-start w-[800px]"
            type="text"
            placeholder="What are you looking for?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          
        </div>

        <div className="font-semibold text-lg flex items-center gap-6">
          <ul className="flex flex-wrap gap-6">
            <li className="p-1  flex">
              <FaShoppingBag className="mt-1 mr-2" />
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
          <div className="p-1">
            {/* <button className=" bg-black text-red-500 rounded px-4 py-2  m-2 hover:bg-gray-900 "> */}
            <button className=" inline-block rounded-full border-2 border-neutral-800 px-5  font-medium  leading-normal bg-black text-red-500  transition duration-150 ease-in-out  hover:bg-red-500  hover:text-black focus:border-primary-600   ">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <div className="p-1 relative">
            <Link to="/cart">
              <IoCartSharp style={{ fontSize: "40px" }} />
              {/* <span className="absolute top-0 right-2 bg-slate-100 rounded-full w-4 h-4 flex justify-center items-center text-sm"> */}
              <span className="absolute top-0 right-2 bg-slate-100 rounded-full w-4 h-4 flex justify-center items-center text-sm">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white  flex justify-center p-3 ">
      {isLoggedIn && (
        <div className=" mr-10 ">
          <LuUserCircle2   
          style={{ fontSize: "23px" }}
         onClick={handleSideBar}
        />
        </div>
        )}
       <div>
        <ul className="font-semibold flex justify-center  gap-10">
      
        
          <li className=" hover:shadow-xl  hover:shadow-slate-200 ">
            <Link to="/">HOME</Link>
          </li>
          <li className=" hover:shadow-xl  hover:shadow-slate-200 ">
            <Link to="/category/men's clothing">MEN'S FASHION</Link>
          </li>
          <li className=" hover:shadow-xl  hover:shadow-slate-200 ">
            <Link to="/category/women's clothing">WOMENS FASHION</Link>
          </li>
          <li className=" hover:shadow-xl  hover:shadow-slate-200 ">
            <Link to="/category/jewelery">JEWELERY</Link>
          </li>
          <li className=" hover:shadow-xl  hover:shadow-slate-200 ">
            <Link to="/category/electronics">ELECTRONICS</Link>
          </li>
          <li className=" hover:shadow-xl  hover:shadow-slate-200 ">
            <Link to="/category">ALL CATEGORY</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
