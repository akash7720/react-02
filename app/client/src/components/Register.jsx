// import React, { useState } from 'react'

// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom';


// const Register = () => {
//   const router= useNavigate()
//    const [userData,setUserData]=useState({name:"",email:"",password:"",ConfirmPassword:""});
//  console.log(userData,"userData")

//    function hendleChange(event){
//       setUserData({...userData,[event.target.name]:event.target.value})

//    }

//    function handleSubmit(event){
//        event.preventDefault();
//        if(userData.name && userData.email && userData.password && userData.ConfirmPassword){
         
//          if(userData.password === userData.ConfirmPassword){
     
//           toast.success("Registeration Successfuall")
//           router('/Login')
//          }else{
//           toast.error("Password & ConfirmePassword Not Matched")
//          }



//        }else{
//         toast.error("All Fildes Are Requared")
//        }
//    }


//   return (
//     <div>
//         <h1>Register From</h1>

//         <form onSubmit={handleSubmit}>
//         <label>Name</label><br/>
//         <input type="text" onChange={hendleChange} name="name"/><br/>
//         <label>Email</label><br/>
//         <input type="email" onChange={hendleChange} name="email"/><br/>
//         <label>Password</label><br/>
//         <input type="password" onChange={hendleChange} name="password"/><br/>
//         <label>ConfirmPassword</label><br/>
//         <input type="password" onChange={hendleChange} name="ConfirmPassword"/><br/>
//         <input type="submit" value="Register_Form"/><br/>
        
//         </form>
      
//     </div>
//   )
// }

// export default Register



import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Toast from 'react-hot-toast'

export const Register = () => {

  const router =useNavigate()
  // const router= useNavigate()
  const [userData ,setUserdata]= useState({name:"",email:"",password:"",ConfirmPassword:""})

  function handleChange(event){
    console.log(userData ,"userData")
     setUserdata({...userData,[event.target.name]:event.target.value})
  }
  function handleSubmit(event){
      // event.preventDefault();
         event.preventDefault();
      if(userData.name && userData.email && userData.password && userData.ConfirmPassword){

        if(userData.password === userData.ConfirmPassword){

          try {
          const response= {data:{success:true},massage:"Registeration Successfull"}

          if(response.data.success){
              Toast.success("Register successfull");
           setUserdata({name:"",email:"",password:"",ConfirmPassword:""})
              router("/login")
          } 
          } catch (error) {
            console.log(error);
          }

        }else{
          alert("passwpord & c.p are not matched")
        }
      }else{
        alert("all fildes are requared")
      }
  }
  return (
    <div>
      <h1>Register</h1><br/>
      <form onSubmit={handleSubmit}>
      <label>Name</label><br/>
      <input type='text' onChange={handleChange} name='name'/><br/>
      <label>Email</label><br/>
      <input type='email'onChange={handleChange}  name='email'/><br/>
      <label>Password</label><br/>
      <input type='password' onChange={handleChange}  name='password'/><br/>
      <lable>ConfirmPassword</lable><br/>
      <input type='password' onChange={handleChange}  name='ConfirmPassword'/><br/>
      <input type='submit' value="Submit"/>
      </form>
    </div>
  )
}

export default Register

