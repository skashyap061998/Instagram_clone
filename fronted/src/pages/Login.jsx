import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [formData, setFormData] = useState({    
    email: '',
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
    <div className="Login-form-container">
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;