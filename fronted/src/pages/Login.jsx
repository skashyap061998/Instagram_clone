import React, { useState } from 'react';
import styles from './Login.module.css';
import {AiOutlineFacebook} from "react-icons/ai"
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    x: '',   
    password: ''
  });
  

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data)
      // if (response.ok) {
      // } else {
      //   alert(data.error);
      // }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
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