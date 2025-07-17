import { useEffect, useState } from "react";

function Users(){

    const [userData,setUserData]=useState([]);
    const [loading,setLoading]=useState(false)

    const fetchData=async()=>{
        try {
            setLoading(true)
            const apiResponse= await fetch('https://dummyjson.com/users',{method:'GET'})
            const data = await apiResponse.json();
            if(data?.users){
                 setUserData(data.users)
                 setLoading(false)
            }
            else{
                setLoading(false)
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
        <div>
            {loading?<h1>The Data is Loading</h1>:null}
        </div>
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