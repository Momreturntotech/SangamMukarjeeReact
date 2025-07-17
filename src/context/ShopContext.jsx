import { createContext, useState } from "react";

export const ShopContext=createContext(null);

const  ShopContextProvider = ({children})=>{
    const [cart,setCart]=useState(0)
    const [changeColor,setChangeColor]=useState("green")

    return(
        <ShopContext.Provider value={{cart,setCart,changeColor,setChangeColor}}>
        {children}
        </ShopContext.Provider>

    )

}
export default ShopContextProvider