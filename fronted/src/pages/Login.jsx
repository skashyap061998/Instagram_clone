import React, { useState } from 'react';
import styles from './Login.module.css';
import {AiOutlineFacebook} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { LoginFunction } from '../redux/action';

function Login() {

  const token = useSelector((store)=>store.token)
  // const location = useLocation()


  // console.log(token)



  const [formData, setFormData] = useState({
    x: '',   
    password: ''
  });
  
const dispatch = useDispatch()
const navigate = useNavigate()
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginFunction(formData,navigate))
    
  }

  return (
   <>
   
   <div className={styles.LoginContainer}>
      <img src="https://res.cloudinary.com/dz2lqhmsp/image/upload/v1679219328/instagaram_a3kzcb.jpg" atl="Instagram"/>
  
   
   <div className={styles.LoginFormContainer}>
      <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
          
          <input
            type="text"
            name="x"
            value={formData.x}
            placeholder="Username or email"
            onChange={handleChange}
            required
          />
        </div>
      
        <div className="form-group">
          
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

       
        <button type="submit">Log in</button>
        <p>Forget password ?</p>
      </form>
    </div>
    </div>


    <div className={styles.LoginLoginButtonContainer}>
    <p>Don't have an account? <Link to="/signup"> Sign up</Link></p>
    </div>

   
   </>
  );
}

export default Login;