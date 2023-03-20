import React, { useState } from 'react';
import styles from './Signup.module.css';
import {AiOutlineFacebook} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { SignupFunction } from '../redux/action';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Signup_Status = useSelector((store)=>store.Store_Status)
  console.log(Signup_Status,"sttus")
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(SignupFunction(formData,navigate))
  }

  return (
   <>
   
   <div className={styles.signupContainer}>
      <img src="https://res.cloudinary.com/dz2lqhmsp/image/upload/v1679219328/instagaram_a3kzcb.jpg" atl="Instagram"/>
  
   
   <h4 style={{color:"#8e8e8e",marginLeft:"10%",marginRight:"10%",fontSize:"1.1rem",fontWeight:"500",lineHeight:"1.1rem"}}>Sign up to see photos and videos from your friends.</h4>
   <button className={styles.facebookbutton}><AiOutlineFacebook/> Log in with Facebook</button>
   <hr className={styles.hr}/>
   
   <div className={styles.signupFormContainer}>
      <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
          
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="Username"
            name="username"
            placeholder='Username'
            value={formData.confirmPassword}
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
<p>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a></p>
<p>By signing up, you agree to our <a href="">Terms , Privacy Policy and Cookies Policy</a> .</p>
       
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>


    <div className={styles.SignupLoginButtonContainer}>
    <p>Have an account? <Link to="/login"> Log in</Link></p>
    </div>

   
   </>
  );
}

export default Signup;