import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

const Home = () => {
  const { data, setData, loading } = useContext(AppContext);

  function sortByPrice(value) {
    const newArr = [...data];
    console.log(value);
    if (value === "low To high") {
      newArr.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      newArr.sort((a, b) => {
        return b.price - a.price;
      });
    }
    setData(newArr);
  }

  return (
    <div>
      <div className="flex justify-center items-center space-x-4 flex-col md:flex-row">
        <h1 className="text-center font-bold text-3xl text-gray-700 py-4">
          Welcome to my shopping page
        </h1>
        <select
          name="sort"
          className="px-3 py-1 ring-1 rounded-md outline-none"
          onChange={(e) => sortByPrice(e.target.value)}>
          <option value="">sort</option>
          <option value="low To high">low To high</option>
          <option value="high To low">high To low</option>
        </select>
      </div>

      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <div className="w-full max-w-[1180px] mx-auto grid mt-8 py-4 pb-12 gap-6 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 px-4 md:px-0 ">
          {data.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Home;
