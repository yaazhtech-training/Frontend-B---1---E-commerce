import React, { useState } from "react";
import { IoMdEyeOff  } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Login = ({isLoggedIn,
  setIsLoggedIn}) => {
 
//login
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //signup

  const [userNameSignUp, setUserNameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("");
//show signup popup
const[showSignUp,setShowSignUp]=useState(false)
 const navigate=useNavigate()


const handleSignIn=()=>{

setIsLoggedIn(!isLoggedIn)
navigate('/')
}

const handleSignUp=()=>{
 
  setIsLoggedIn(!isLoggedIn)
 
  navigate('/')
  
}

  return (
    
    // <div className=" min-h-screen flex justify-center items-start mt-10  "   >
    
    <div className="  flex justify-center items-start m-4 "   >
     
      {/* signup */}

      {showSignUp ? (
        <div className="  border rounded-sm   bg-white">
        <div>
          <h2 className="font-bold text-center">SIGN IN</h2>
        </div>
        <form className="mt-2 text-start  p-10 ">
          <div className="mb-4">
            <label className="text-md font-semibold ">User Name:</label>
            <input
              className="text-md p-2 mt-2 w-full bg-red-50  border-2 border-b-gray-500  focus:outline-none"
              type="text"
              placeholder="Enter Your username"
              title="E-mail id"
              autoComplete="off"
              value={userNameSignUp}
              onChange={(e) => setUserNameSignUp(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-md font-semibold ">Password:</label>

            <div className="relative">
              <input
                className=" text-md p-2 mt-2 w-full bg-red-50  border-2 border-b-gray-500 focus:outline-none"
                //  type='password'
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your password"
                title="Password"
                autoComplete="new-password"
                value={passwordSignUp}
                onChange={(e) => setPasswordSignUp(e.target.value)}
              />
              <span
                className="absolute top-5 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                <IoMdEyeOff />
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-md font-semibold ">Confirm Password:</label>
            
            <input className="text-md p-2 mt-2 w-full bg-red-50  border-2 border-b-gray-500 focus:outline-none"
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPasswordSignUp}
            onChange={(e)=>setConfirmPasswordSignUp(e.target.value)}/>

          </div>
         
          
         <div className="mt-10  text-center ">
          <button className="bg-gradient-to-l from-neutral-200 to-red-500 rounded px-4 py-2" onClick={handleSignUp}>
            SIGN UP 
          </button>
          </div>
        </form>
      </div>
      ):( 
      //signin
      <div className="  border rounded-sm  bg-white  shadow-lg  p-2 ">
      <div>
        <h2 className="font-bold text-center">SIGN IN</h2>
      </div>
      <form className="mt-2 text-start  p-10  " >
        <div className="mb-4">
          <label className="text-md font-semibold ">User Name:</label>
          <input
            className="text-md px-6 py-2 mt-2 w-full bg-red-50  border-2 border-b-gray-500  focus:outline-none"
            type="text"
            placeholder="Enter Your username"
            title="E-mail id"
            autoComplete="off"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-md font-semibold ">Password:</label>

          <div className="relative">
            <input
              className=" text-md p-2 mt-2 w-full bg-red-50  border-2 border-b-gray-500 focus:outline-none"
              //  type='password'
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your password"
              title="Password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute top-5 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              <IoMdEyeOff />
            </span>
          </div>
        </div>
        {/* <a href="#" className="block  font-semibold mt-5">
          Forget Password?
        </a> */}
        <div className="flex justify-between mt-10 ">
        <button className="bg-gradient-to-l from-neutral-200 to-red-500  rounded px-4 py-2" onClick={handleSignIn}>
       
          SIGN IN
        </button>

       
        <button className="bg-gradient-to-l from-neutral-200 to-red-500  rounded px-4 py-2" onClick={(e)=>{e.preventDefault() ;setShowSignUp(!showSignUp)}}>
          SIGN UP 
        </button>
        </div>
      </form>
    </div>
)}

      
    </div>

    

 
  );
};

export default Login;
