import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const CartDetails = ({ item }) => {
  const { removeToCard, quantity, quantityChange } = useContext(AppContext);
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (

    <>
      <div className="flex flex-col items-center space-x-12 md:flex-row">
        <div>
          <img className="w-[210px]" src={item.image} alt="Product Image" />
        </div>
        <div className="md:w-[420px] pr-8 mt-3 w-full">
          <h1 className="text-2xl font-semibold mb-6 text-gray-500">{item.title}</h1>
          <p>
            {item.description.length > 120
              ? `${item.description.substring(0, 120)}....`
              : item.description}
          </p>
          <div className="flex w-full justify-between pr-8 mt-8 items-center">
            <p className="font-bold text-green-500 text-xl">$ {item.price}</p>
            <div>
              <p className="py-1">Quantity</p>
              <select
                value={quantity}
                className="w-11/12 py-1 ring-1 rounded-md focus:border-blue-500"
                onChange={(e) => quantityChange(e.target.value , item)}>
                {number.map((numItem, index) => {
                  return (
                    <option key={index} value={numItem}>
                      {numItem}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              onClick={() => removeToCard(item.id)}
              className="w-9 h-9 rounded-full bg-red-200 flex justify-center items-center text-red-600 text-xl hover:text-white hover:bg-red-400 transition-all duration-200">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-700 h-[2px] rounded-lg my-8"></div>
    </>
  );
};

export default CartDetails;
