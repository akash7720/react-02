import React, { useState } from 'react'

const Login = () => {

  const[userlogin , setuserLogin] = useState({email:"",password:""})
  console.log(userlogin,"userlogin")

function handleChange(event){
    setuserLogin({...userlogin,[event.target.name]:event.target.value})
}

async function handleSubmit(event){
  event.preventDefault();
     if(userlogin.email && userlogin.password){

        alert("Login Successful")
     }else{
        alert("all Fildes are requared")
     }
}

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label><br/>
            <input type="email" onChange={handleChange} name="email" /><br/>

            <label>password</label><br/>
            <input type="password" onChange={handleChange}   name="password"/><br/>

            <input type="submit" value="Login" /><br/>
        </form>
    </div>
  )
}

export default Login