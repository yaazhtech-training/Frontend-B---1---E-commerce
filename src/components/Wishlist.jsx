import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Wishlist = ({ wishList, setWishList, handleRemoveWishList }) => {
  return (
    <div className="m-5 text-center w-full h-screen ">
      <h1 className="font-bold text-xl m-2  ">My Wishlist</h1>

      <div className="grid grid-cols-4 gap-10  ">
        {wishList.map((values, index) => (
          <div
            key={index}
            className=" relative overflow-hidden  rounded-lg  border border-gray-500"
          >
            <div className="bg-gradient-to-l from-gray-600 to-yellow-200 p-3 ">
              <img
                src={values.image}
                alt="store"
                className="w-full h-64 object-contain  "
              />
              <div className="absolute right-2  top-5 ">
                {/* {" "} */}
                <FaShoppingBag
                  style={{ fontSize: "20px", color: "yellow" }}
                  onClick={() => handleRemoveWishList(values)}
                />
              </div>
            </div>
            <div className="bg-white p-5 ">
              <div className="font-bold text-md  text-center h-16">
                {values.title}
              </div>
              <p className=" text-md">Price:{values.price}</p>

              <div className="px-6 pt-4 pb-2">
                
                <button className="bg-gray-600 border-none hover:bg-blue-700  font-bold py-2 px-4 rounded ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
