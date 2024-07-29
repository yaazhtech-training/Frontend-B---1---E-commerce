// import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Women from "./components/Women";
import Men from "./components/Men";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Category from './components/Category'
import Profile from "./components/Profile";

function App() {
  
  //wishlist
  const [wishList, setWishList] = useState([]);
  //cart
  const [cart, setCart] = useState([]);
  //cart count
  const [cartCount, setCartCount] = useState(0);

  //input search
  const [searchInput, setSearchInput] = useState("");
// is login //is signup
  const[isLoggedIn,setIsLoggedIn]=useState(false)

  //Sidebar open and clsoe
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    //sidebar items (profile,order,address)
const[selectedSideBarItems,setSelectedSideBarItems]=useState(null)



//profile close after ok submit
const[isProfileOpen ,setIsProfileOpen]=useState(true)

//order close after continue shopping button
const[isOrderOpen,setIsOrderOpen]=useState(true)
 

  const handleAddWishList = (item) => {
    const newWishList = [...wishList, item];
    setWishList(newWishList);
    toast.success("Item added to wishlist", { autoClose: 2000 });
  };
  const handleRemoveWishList = (item) => {
    const newWishList = [...wishList.filter((wish) => wish.id !== item.id)];
    setWishList(newWishList);
    toast.error("Item removed from wishlist", { autoClose: 2000 });
  };

  const handleAddCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);//if using  item without spread operator,the product count is incrasung for all the products

    setCartCount(
      cart.reduce((acc, currentItem) => acc + currentItem.quantity, 1)
    );
  };

  // const handleAddCart=(item)=>{
  //   const newItem=[...cart,item];
  //   setCart(newItem);
  //   setCartCount(cartCount+1)
  // }
  const handleRemoveCart = (item) => {
    const newItem = [...cart.filter((product) => product.id !== item.id)];
    setCart(newItem);
    setCartCount(cartCount - 1);
  };
//sidebar oprn and close
  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

// function to select items in sidebar(profile,order,...)
  const handleSidebarItemClick=(item)=>{
    setSelectedSideBarItems(item);
    setIsSideBarOpen(true)
    
      }
      // const handleOk = () => {
      //   setShowHomeContent(true); 
        
      // };

      // const handleOk=()=>{
      //   setIsSideBarOpen(false)
      // }
   
  return (
    <div className="App ">
      <>
        <BrowserRouter>
          <Navbar
            
            cartCount={cartCount}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSideBar={handleSideBar}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                 
                  
                  
                  
                  
                  
                  setIsLoggedIn={setIsLoggedIn}
                  isSideBarOpen={isSideBarOpen}
                  setIsSideBarOpen={setIsSideBarOpen}
                  handleSideBar={handleSideBar}
                  selectedSideBarItems={selectedSideBarItems}
                  setSelectedSideBarItems={setSelectedSideBarItems}
                  handleSidebarItemClick={handleSidebarItemClick}
                 
                  isProfileOpen={isProfileOpen}
                  setIsProfileOpen={setIsProfileOpen}
                  isOrderOpen={isOrderOpen}
                  setIsOrderOpen={setIsOrderOpen}
                  
                />
              }
            />
            {/* <Route
              path="/category"
              element={
                <Home
                  wishList={wishList}
                  handleAddWishList={handleAddWishList}
                  handleRemoveWishList={handleRemoveWishList}
                  cart={cart}
                  handleAddCart={handleAddCart}
                  searchInput={searchInput}
                />
              }
            /> */}
             <Route
              path="/category"
              element={
                <Category
                  wishList={wishList}
                  handleAddWishList={handleAddWishList}
                  handleRemoveWishList={handleRemoveWishList}
                  cart={cart}
                  handleAddCart={handleAddCart}
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/category/men's clothing"
              element={
                <Men
                  wishList={wishList}
                  handleAddWishList={handleAddWishList}
                  handleRemoveWishList={handleRemoveWishList}
                  cart={cart}
                  handleAddCart={handleAddCart}
                
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/category/women's clothing"
              element={
                <Women
                  wishList={wishList}
                  handleAddWishList={handleAddWishList}
                  handleRemoveWishList={handleRemoveWishList}
                  cart={cart}
                  handleAddCart={handleAddCart}
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/category/electronics"
              element={
                <Electronics
                  wishList={wishList}
                  handleAddWishList={handleAddWishList}
                  handleRemoveWishList={handleRemoveWishList}
                  cart={cart}
                  handleAddCart={handleAddCart}
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/category/jewelery"
              element={
                <Jewelery
                  wishList={wishList}
                  handleAddWishList={handleAddWishList}
                  handleRemoveWishList={handleRemoveWishList}
                  cart={cart}
                  handleAddCart={handleAddCart}
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishList={wishList}
                  setWishList={setWishList}
                  handleRemoveWishList={handleRemoveWishList}
                />
              }
            />

            <Route path="/login" element={<Login   isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}/>} />
            {/* <Route path="/search" element={<Home/>} /> */}
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleRemoveCart={handleRemoveCart}
                  cartCount={cartCount}
                  setCart={setCart}
                  setCartCount={setCartCount}
                />
              }
            />
           <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
