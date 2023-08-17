import { createContext, useState } from "react";

export const AppContext = createContext()
import { useEffect } from "react";

export function AppContextProvider({children}){

    const [cartData , setCartData] = useState([])
    const [count , setCount] = useState(null)
    const [quantity , setQuantity] = useState(1)

    const [data, setData] = useState([]);


    const [loading , setLoading] = useState(false)

     async function fetchData() {
       const url = "https://fakestoreapi.com/products/";

       setLoading(true)

       try {
         const res = await fetch(url);
         const result = await res.json();
         console.log(result)
         setData(result);
       } catch (error) {
         console.log("error aa gya ji");
       }

       setLoading(false)
     }


     console.log(loading)


    //  handle Quantity 
    function quantityChange(value , item){
        cartData.filter((saveitem) => saveitem.id === item.id ? setCount(value) : "" )
        console.log(value)
        setQuantity(value)
    }

    function addToCart(item){
        setCartData((prev) => {
            return([...prev , item])
        })
        setCount((count) + 1) 
    }

    function removeToCard(id){
        const filteredItem = cartData.filter((cItem) => {
            return cItem.id !== id;
        })  
        setCartData(filteredItem)
        if (cartData.length > 0){
          setCount((count)-1)
        }
        else{
          setCount(0)
        }
    }



      useEffect(() => {
        fetchData();
      }, []);

 
    const value = {
      cartData,
      setCartData,
      removeToCard,
      addToCart,
      count,
      setCount,
      quantity,
      setQuantity,
      quantityChange,
      data,
      setData,
      fetchData,
      loading,
      setLoading
    };


    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )

}