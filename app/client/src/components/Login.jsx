 
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
// import axios from "axios";
import api from "../AxiosConfig";

function Login() {
  const { LOGIN, state } = useContext(AuthContext);

  const router = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  console.log(userData, "userData");
  // userData.name
  // userData[name]

  function handleChange(event) {
    // console.log(event.target.value, event.target.name)
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      // await calling backend one server to another server request, backend validation, data to store mongodb
      try {
        const response = await api.post(
          "/api/v1/user/login",{ userData },);
        // const response = { data: { success: true, message: "Login Sucessfull.", token: "abcdefghi", userData: { name: 'Awdiz', email: "awdiz@gmail.com" } } }
        // return res.status(201).json({ success: true, message: "Registeration Completed." })
        if (response.data.success) {
          // localStorage.setItem("token", JSON.stringify(response.data.token))
          LOGIN(response.data.userData);
          setUserData({ email: "", password: "" });
          toast.success(response.data.message);
          router("/");
        }else{
          toast.error(response.data.message)
        }

        
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert("All fields are required.");
    }
  }

  useEffect (()=>{
    console.log(state);
    if(state && state?.user?.role !== undefined){
      if(state?.user?.role === 'buyer'){
        router("/");
      }else {
        router("/seller");
      }
    }
  },[state])

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <br />
        <input
          style={{ border: "1px solid red" }}
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>

<button onClick={()=> router("/register")}>Register?</button>

    </div>
  );
}

export default Login;
