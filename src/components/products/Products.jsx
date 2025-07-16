import { useState } from "react";
import ProductDetails from "./ProductDetails";

function Products(){

const [finalList,setFinalList]=useState([])
const [visible,setVisible]=useState(false)
const [selectedId,setSelectedId]=useState(0)

const fetchListOfProducts=async()=>{
    try {
        const apiResponse=await fetch('https://dummyjson.com/products',{ method: 'GET'});
        const result = await apiResponse.json()
        setFinalList(result.products)
        console.log(result.products)
    } catch (error) {
        console.log(error)
        
    }
}
fetchListOfProducts();





    return(
        <>
        <h1>List Of Products</h1>
        <ul>
        {finalList.map((item,id)=>(
            <>
            <li key={item.id} onClick={()=>{setVisible(!visible);setSelectedId(item.id)}}>{item.title}</li>
            {(visible && (selectedId === item.id))?<ProductDetails Desc={item.description} Price={item.price} />:""}
            </>

        ))}
        </ul>

    
        
        </>)
        
}
export default Products