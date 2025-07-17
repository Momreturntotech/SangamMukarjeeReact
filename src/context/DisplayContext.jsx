import { useContext } from "react"
import { ShopContext } from "./ShopContext"

function DisplayContext(){
    const {cart,setCart,changeColor,setChangeColor}=useContext(ShopContext)
    return(
        <>
        <h1> The Cart value is {cart}</h1>
          <h1> The changeColor is {changeColor}</h1>
            <button onClick={()=>setCart(cart+1)}>IncrementCart</button>
             <button onClick={()=>setChangeColor("brown")}>Click to Change the Color</button>
        </>
    )

}
export default DisplayContext