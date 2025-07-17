import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import './style.css'
//basic styling methind

function Products(){

const [finalList,setFinalList]=useState([])
const [visible,setVisible]=useState(false)
const [selectedId,setSelectedId]=useState(0)
const [count,setCount]=useState(0)

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


useEffect(()=>{
    
    console.log("Executed during the useEffect on the first page upload ")
    fetchListOfProducts()

    return()=>{
        console.log("Component is unmounted -> some side effects here also ")

    }
    
    },[count])








    return(
        <>
        <h1>List Of Products</h1>
        <ul className="displayformat">
        {finalList.map((item,id)=>(
            <>
            <li key={item.id} onClick={()=>{setVisible(!visible);setSelectedId(item.id)}}>{item.title}</li>
            {(visible && (selectedId === item.id))?<ProductDetails Desc={item.description} Price={item.price} />:""}
            </>

        ))}
        </ul>
        <button onClick={()=>setCount(count+1)}>Click Me To Increment the Count</button>
        <button>{count}</button>

    
        
        </>)
        
}
export default Products