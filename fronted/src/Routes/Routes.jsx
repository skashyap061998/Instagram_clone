import React from 'react'
import { Route, Router } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routes = () => {
  return (
    <div>
<Router>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>

</Router>

    </div>
  )
}

export default Routes