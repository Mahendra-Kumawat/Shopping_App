import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductCard = ({ item }) => {
  
    const { addToCart, removeToCard, cartData } = useContext(AppContext);
  return (
    <div className="group flex flex-col items-center pb-5 py-2  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg hover:scale-110 transition-all duration-500 hover:shadow-[0px_0px_95px_53px_#00000024]">
      <div>
        <h1 className="text-xl font-semibold py-4 px-4">
          {item.title.length > 15
            ? `${item.title.substring(0, 15)}....`
            : item.title}
        </h1>
      </div>
      <div>
        <p className="w-[180px] text-xs text-gray-400">
          {item.description.length > 30
            ? `${item.description.substring(0, 45)}......`
            : item.description}
        </p>
      </div>
      <div className="h-[210px] py-2 px-4 bg-transparent">
        <img className="h-full object-contain" src={item.image} alt="" />
      </div>
      <div className="flex justify-between items-center w-full px-4 mt-8">
        <p className="text-green-600 font-bold">${item.price}</p>
        {cartData.some((cartItem) => {
            return (
                cartItem.id === item.id
            )
        }) ? (
          <button
            className="flex items-center rounded-full px-3 p-2 tracking-wide border-slate-700  text-slate-700 border-2 group-hover:text-white group-hover:bg-slate-700 font-bold uppercase text-xs transition-all duration-300"
            onClick={() => removeToCard(item.id)}>
            remove to Cart
          </button>
        ) : (
          <button
            className="flex items-center rounded-full px-3 p-2 tracking-wide border-slate-700  text-slate-700 border-2 group-hover:text-white group-hover:bg-slate-700 font-bold uppercase text-xs transition-all duration-300"
            onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
