import React from 'react'
import { NavLink } from 'react-router-dom';

const EmptyCard = () => {
  return (
    
      <div className="flex gap-y-4 flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-gray-600 capitalize text-xl font-semibold">
          your cart is empty!
        </h1>
        <NavLink to={"/"}>
          <button className="px-12 rounded-lg py-3 bg-green-500 text-white text-xl font-medium mt-4 transition-all duration-500 border-green-500 border-2 hover:bg-white hover:text-green-500">
            Shop Now
          </button>
        </NavLink>
      </div>

  );
}

export default EmptyCard
