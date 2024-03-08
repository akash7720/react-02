import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Registerpage = () => {
const router= useNavigate()
  const [userData, setuserData]=useState({name:"", email:"",password:"", ConfirmPassword:""})
   
  console.log(userData,"userData")
  
  function handleChange(event){
  //  console.log( event.target.value, event.target.name)
      setuserData({...userData,[event.target.name]:event.target.value})

  }
    
 async function handleSubmit(event){
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.ConfirmPassword){
            
          if(userData.password === userData.ConfirmPassword){
            
              alert("registration successful")

              router('/Login')
          }else{
             alert("password and ConfirmPassword are not matched")
          }
        }else{
             alert("All fildes are requared")
        }
  }
  return (
    <div>
      <h1>Register</h1>
         <form onSubmit={handleSubmit}>
              <label>Name</label><br/>
              <input type="text" onChange={handleChange} name="name" /><br/>

              <label>Email</label><br/>
              <input type="email" onChange={handleChange} name="email" /><br/>

              <label>password</label><br/>
              <input type='password' onChange={handleChange} name="password" /><br/>

              <label>ConfirmPassword</label><br/>
              <input type="password" onChange={handleChange} name="ConfirmPassword" /><br/>

              <input type='submit' value="Register"/>
         </form>

   
    </div>
  )
}

export default Registerpage