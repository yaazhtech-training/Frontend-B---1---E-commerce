import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import home from "./Assets/home.jpg";
import { MdOutlineStorage } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Orders from "./Orders";
import Address from "./Address";
const Home = ({
 
  isSideBarOpen,
  setIsSideBarOpen,
  selectedSideBarItems,
  setSelectedSideBarItems,
  handleSidebarItemClick,
  // showHomeContent,setShowHomeContent
  isProfileOpen,setIsProfileOpen,
  isOrderOpen,setIsOrderOpen

}) => {
  const [store, setStore] = useState([]); //here for category
  //input search
  // const[searchInput,setSearchInput]=useState('')

  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();
  //
  // const[showHomeContent,setShowHomeContent]=useState(null)



  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setStore(response.data);
        console.log(setStore);
      })
      .catch((error) => console.log(error));
  };

  const categoryImage = {
    "men's clothing":
      "https://img.freepik.com/free-photo/picture-elegant-young-fashion-man_158595-527.jpg",

    "women's clothing":
      "https://img.freepik.com/free-photo/woman-red-dress_144627-31606.jpg",
    electronics:
      "https://img.freepik.com/premium-photo/showcase-electronic-items-black-background_893571-15169.jpg",
    jewelery:
      "https://img.freepik.com/premium-photo/women-s-gold-necklace-earring-with-diamond-sapphire-rock-background-closeup_579873-157.jpg",
  };

  // const handleAdd=()=>{
  //   const newCard={id:store.length+1,title:"New",price:22}
  //   setStore([...store,newCard])
  // }

  const handlePickCategory = (category) => {
    navigate(`/category/${category}`);
  };


// const handleOk=()=>{
//   setShowHomeContent(true)
// }


  return (
    <>
      <div className="flex   w-full  ">
        <div className="w-1/6  ">
          {isSideBarOpen && (
            <div className="  bg-red-500 h-full shadow-lg  ">
              <Sidebar handleSidebarItemClick={handleSidebarItemClick} />
            </div>
          )}
        </div>

        <div className={isSideBarOpen ? "w-5/6 " : "w-[500rem] mr-8"}>

          {selectedSideBarItems==="Profile" && isProfileOpen && ( <Profile setIsSideBarOpen={setIsSideBarOpen} setIsProfileOpen={setIsProfileOpen} setSelectedSideBarItems={setSelectedSideBarItems}/>)}
          {selectedSideBarItems==="Your Orders" && isOrderOpen && ( <Orders setIsSideBarOpen={setIsSideBarOpen} setIsOrderOpen={setIsOrderOpen}  setSelectedSideBarItems={setSelectedSideBarItems}/>)}
          {selectedSideBarItems==="Address" && <Address/>}
         
          {!selectedSideBarItems &&   (
            <div>
               <div className="m-10 ">
            <img
              src={home}
              alt="home"
              className="w-[1900px] h-[500px] bg-gray-900 m-auto object-full"
            />
          </div>



          
          <div className=" m-10  ">
            <div className="grid grid-cols-2 gap-6 ">
              {/* {store.map((values,index)=>( */}
              {store
                // .filter(
                //   (values) =>
                //     values.title
                //       .toLowerCase()
                //       .includes(searchInput.toLowerCase()) ||
                //     values.category
                //       .toLowerCase()
                //       .includes(searchInput.toLowerCase())
                // )

                .map((category, index) => (
                  <div key={index}>
                    <div className=" p-3    ">
                      <img
                        src={categoryImage[category]}
                        alt={category}
                        className=" w-96  h-60  m-auto rounded-full object-cover hover:scale-105 ease-in-out duration-300 delay-300"
                        onClick={() => handlePickCategory(category)}
                      />
                    </div>

                    <div className="font-bold text-md  text-center h-16 uppercase">
                      {category}
                    </div>
                  </div>
                ))}
            </div>
          </div>

            </div>
          )}
         
        </div>

        {/* <ToastContainer/> */}
      </div>
    </>
  );
};

export default Home;

