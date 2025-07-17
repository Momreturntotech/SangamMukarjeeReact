import { useEffect, useState } from "react";

function Users(){

    const [userData,setUserData]=useState([]);

    const fetchData=async()=>{
        try {
            const apiResponse= await fetch('https://dummyjson.com/users',{method:'GET'})
            const data = await apiResponse.json();
            if(data?.users){
                 setUserData(data.users)
            }
           
            console.log(userData)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    return(
        <>
        <div className="">
            {
            (userData && userData.length >0)?
            userData.map((obj,id)=>(
                <>
                <h4 key={obj.id}>{obj.firstName}<span>{obj.lastName}</span></h4>
              
                </>
            )):null}

        </div>
        </>
    )







}
export default Users;