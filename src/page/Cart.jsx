import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import EmptyCard from "../components/EmptyCard";
import CartDetails from "../components/CartDetails";

const Cart = () => {
  const { cartData } = useContext(AppContext);

  const [totalPrice , setTotalPrice] = useState(0)

  useEffect(()=>{
    setTotalPrice(cartData.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    ));
  }, [cartData])

  return (
    <div>
      {cartData.length > 0 ? (
        <div className="flex flex-col max-w-[1180px] mx-auto justify-between md:mt-12 mt-4 md:space-x-8 md:py-12 px-4 md:flex-row">
          <div>
            {cartData.map((item) => {
              return <CartDetails item={item} key={item.id} />;
            })}
          </div>
          <div className="flex flex-col justify-between mt-12 w-full md:w-[50%]">
            <div>
              <h2 className="font-semibold text-green-800 text-2xl">
                Your Cart
              </h2>
              <h2 className="text-5xl text-green-800 font-bold py-2">
                SUMMARY
              </h2>
              <p className="my-8 text-xl capitalize text-slate-800 font-bold">
                total items: {cartData.length}
              </p>
            </div>
            <div className="mb-16 pb-12">
              <p className=" text-xl capitalize text-slate-800 font-bold">
                total Amount: ${totalPrice}
              </p>
              <button className="px-12 w-full rounded-lg py-3 bg-green-800 text-white text-xl font-medium mt-4 transition-all duration-500 border-green-800 border-2 hover:bg-white hover:text-green-800">Checkout now</button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default Cart;
