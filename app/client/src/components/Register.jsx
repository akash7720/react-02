import React, { useState } from 'react'

const Register = () => {

  const[UserData,setUserData] = useState({name:"",email:"",password:"",ConfirmPassword:""})
  console.log(UserData, "userData")

  function hendalchange(event){
      setUserData({...UserData,[event.target.name]:event.target.value})
  }

  function handlesubmit(event){
    event.preventDefault();
         if(UserData.name && UserData.email && UserData.password &&  UserData.ConfirmPassword){
               
          if(UserData.password === UserData.ConfirmPassword){
             
            alert("Registeration is Successfual")
          }else{
              alert("password and consfirm are not matched")
          }

         }else{
            alert("All fildes are requared")
         }
  }
 return (
    <div>
       <h1>Register</h1>
       <form onSubmit={handlesubmit}>
       <label>Name</label><br/>
          <input type="text"  onChange={hendalchange} name="name" /><br/>
          <label>Email</label><br/>
          <input type="email" onChange={hendalchange}  name="email" /><br/>
          <label>Password</label><br/>
          <input type="password" onChange={hendalchange}  name="password" /><br/>
          <label>ConfirmPassword</label><br/>
          <input type="password" onChange={hendalchange}  name="ConfirmPassword" /><br/>
          <input type="submit" value="Register"/><br/>
      
       </form>
    </div>
    
  )
}

export default Register