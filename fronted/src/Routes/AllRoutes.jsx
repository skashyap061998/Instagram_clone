import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../comoponents/RequireAuth'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    

    <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>
    
</Routes>

    </div>
  )
}

export default AllRoutes