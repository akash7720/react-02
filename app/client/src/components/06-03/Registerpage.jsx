

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registerpage = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", password: "", ConfirmPassword: "" });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.name && userData.email && userData.password && userData.ConfirmPassword) {
      if (userData.password === userData.ConfirmPassword) {
        try {
          const response = await axios.post("http://localhost:3001/api/v1/auth/register", userData);
          if (response.data.success) {
            toast.success(response.data.message);
            setUserData({ name: "", email: "", password: "", ConfirmPassword: "" });
            router('/Login');
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("Password and Confirm Password do not match");
      }
    } else {
      toast.error("All fields are required");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input type="text" onChange={handleChange} value={userData.name} name="name" /><br />

        <label>Email</label><br />
        <input type="email" onChange={handleChange} value={userData.email} name="email" /><br />

        <label>Password</label><br />
        <input type="password" onChange={handleChange} value={userData.password} name="password" /><br />

        <label>Confirm Password</label><br />
        <input type="password" onChange={handleChange} value={userData.ConfirmPassword} name="ConfirmPassword" /><br />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Registerpage;