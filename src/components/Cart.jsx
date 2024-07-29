import React from "react";
// import { FaShoppingBag } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Shop from "./Assets/Shop.jpg";

const Cart = ({ cart, setCart, handleRemoveCart, setCartCount, cartCount }) => {
  const [shippingCost] = useState(0); // Shipping cost currently set  0

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formatSubtotal = subtotal.toFixed(2);

  const total = subtotal + shippingCost;
  const formatTotal = total.toFixed(2);
  // const handleIncrementQuantity = (productId) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };
  const handleIncrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);

    setCartCount((prevCount) => prevCount + 1);
  };

  const handleDecrementQuantity = (productId) => {
    let shouldDecrementCount = false;
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        shouldDecrementCount = true;
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);

    if (shouldDecrementCount) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  // const handleDecrementQuantity = (productId) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.quantity > 1 && item.id === productId
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };

  return (
    <>
      <h1 className="font-bold text-2xl m-2 text-center ">My Shopping Cart</h1>
      <div className="m-5 flex  justify-around">
        <div className="flex flex-col gap-2 items-start  ">
          {cart.map((item, index) => (
            <div
              key={index}
              className="  flex relative overflow-hidden  rounded-lg  border border-gray-500  "
            >
              <div className="bg-gradient-to-l from-gray-600 to-yellow-200 p-3 ">
                <img
                  src={item.image}
                  alt="store"
                  className="w-40 h-40 object-contain  "
                />
              </div>
              <div className="bg-gray-200 p-5 w-[600px]  text-center ">
                <div className="flex justify-between">
                  <div className="font-bold text-md  text-center h-16">
                    {item.title}
                  </div>
                  <p className=" text-md font-bold text-xl">AED{item.price}</p>
                </div>
                <div className="flex justify-center p-2">
                  <button
                    className="bg-gray-500 px-1 rounded"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <span className="m-2">{item.quantity}</span>
                  <button
                    className="bg-gray-500 px-2 rounded"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button
                    className="m-auto bg-gray-600"
                    onClick={() => handleRemoveCart(item)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="w-96  bg-gray-200 rounded  ">
            <h1 className="text-xl font-bold text-start p-5 ">
              Order Summary{" "}
            </h1>
            <p className="flex justify-between p-5 text-lg text-start">
              Subtotal( {cartCount} item)<span>AED {formatSubtotal}</span>
            </p>
            <p className="flex justify-between p-5 text-lg">
              Shipping<span>{shippingCost} (Free)</span>
            </p>
            <hr className="p-5  border-gray-600 " />
            <h1 className="flex justify-between  text-lg  font-bold p-5">
              Total<span>AED{formatTotal}</span>
            </h1>
            <div className="p-5 text-center ">
              <button className="bg-gray-600 border-none hover:bg-gray-800  font-bold py-2 px-20 rounded  text-xl">
                CHECKOUT
              </button>
            </div>
          </div>
        ) : (
          <div className="m-auto flex items-center ">
            <div className="p-6">
              <h1 className="font-bold text-4xl">
                Your shopping cart looks empty
              </h1>
              <p className="font-bold  mt-5 text-center">What are you waiting for???</p>
            </div>
            <div className="p-6">
              {" "}
              <img src={Shop} alt="cart" className="w-96 h-96 rounded-full " />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
