import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const { count } = useContext(AppContext);
  return (
    <div className="flex flex-row text-white justify-between w-full max-w-[1180px] items-center mx-auto px-4 xl:px-0">
      <div>
        <NavLink to={"/"}>
          <img
            className="w-[130px] md:w-[150px] lg:w-[170px]"
            src={logo}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <NavLink to={"/"}>
          <p className="text-lg">Home</p>
        </NavLink>
        <NavLink to={"/cart"}>
          <div className=" relative text-2xl hover:text-green-400 px-2 py-1 transition-all duration-200">
            {<FaShoppingCart />}
            {
                count ? (<div className="absolute -top-1 animate-bounce right-0 w-5 h-5 text-sm flex items-center justify-center rounded-full bg-green-500">
              {count}
            </div>) : ("")
            }
            
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar
