// import React from 'react'

import { useReducer } from "react";

// const Themes = () => {
//   return (
//     <div>Themes</div>
//   )
// }

// export default Themes


export const ThemeContext= createContext();
 function Reducer(state,action){
      switch (action.type) {
        case "DARK":
              return {...state,user:action.payload}
         case "LIGHT":     
               return {...state,user:null}
        default:
          return  state ;
      }
 }

 const InitionalState={user:null}

const Themes=( {children})=>{
   

  const[state,dispatch]=useReducer(Reducer,InitionalState)

  function DarK(data){
      dispatch({type:"DARK" ,payload:data})
  }
   function Light(){
    dispatch({type:"LIGHT" })
   }
   



     return(
         <AuthContext.Provider  value={{state,DarK,Light}}>
                {children}
         </AuthContext.Provider>

     )

    
}

export default Themes;