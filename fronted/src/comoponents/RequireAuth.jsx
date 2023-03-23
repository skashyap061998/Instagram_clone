import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'


const RequireAuth = ({children}) => {
   
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"))

    
   React.useEffect(()=>{
 
    if(!token){
        navigate("/login")
    }
   },[])

if(token){
    return (children)
}

}
export default RequireAuth