import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'



const Login = () => {
 
  const{LOGIN}=useContext(AuthContext)
  const router= useNavigate()

  const[userlogin , setuserLogin] = useState({email:"",password:""})
  console.log(userlogin,"userlogin")

function handleChange(event){
    setuserLogin({...userlogin,[event.target.name]:event.target.value})
}


  function handleSubmit(event){
    event.preventDefault();
    if( userlogin.email && userlogin.password ){
      try{
        const response={data:{success:true,massage:"Login successfual",userData:{name:"AKASH@",email:"akash@gmail.com"} ,tokan:"ak312skyUHusb"}}
        if(response.data.success){
          LOGIN(response.data.userData)
           localStorage.setItem("tokan" ,JSON.stringify(response.data.tokan))
                toast.success(response.data.massage)
                setuserLogin({ email:"",password:""})
              router('/')
        } 
      }catch(error){
         toast.error(error.response.data.massage)
      }

    }else{
     toast.error("All Fildes Are Requared")
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