import { createContext, useEffect, useReducer } from "react"


export const AuthContext= createContext();

 function Reducer(state,action){
      switch (action.type) {
        case "LOGIN":
              return {...state,user:action.payload}
         case "LOGOUT":     
               return {...state,user:null}
        default:
          return  state ;
      }
 }

 const InitionalState={user:null}

const AuthContextCompount=( {children})=>{
   

  const[state,dispatch]=useReducer(Reducer,InitionalState)

  function LOGIN(data){
      dispatch({type:"LOGIN" ,payload:data})
  }
   function LOGOUT(){
    dispatch({type:"LOGOUT" })
   }

   async function getUserData(tokan){
            try {
              const response={data:{success:true,userData:{name:"AKASH@",email:"akash@gmail.com"}}}
              if(response.data.success){
                LOGIN(response.data.userData)}
          } catch (error) {
              console.log(error);
            }
   }
   useEffect(()=>{
     // const response = await axios.post('/validate-token', { token: token })
      const tokan= JSON.parse(localStorage.getItem("tokan"))
      if(tokan){ 
         getUserData(tokan)
      }
   },[])

     return(
         <AuthContext.Provider  value={{state,LOGIN,LOGOUT}}>
                {children}
         </AuthContext.Provider>

     )

    
}

export default AuthContextCompount;