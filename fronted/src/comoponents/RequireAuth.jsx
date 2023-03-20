import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'


const RequireAuth = ({children}) => {
    console.log(children,"child")
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"))

    console.log(token,'token')
   React.useEffect(()=>{
    console.log("vapis gya")
    if(!token){
        navigate("/login")
    }
   },[])

if(token){
    return (children)
}

}
export default RequireAuth