
import React, { createContext, useState } from 'react'

export const MyCounterContext=createContext();

const ProviderCounterContext = ({children}) => {
    const[counter , setCounter] =useState(0)
    function Increment(){
        setCounter(counter + 10)
    }
    function Decrement() {
              setCounter(counter - 10)
          }
          function Reset() {
              setCounter(0)
          }
  return (
    <div>
         <MyCounterContext.Provider value={{counter,Increment, Decrement,Reset}}>
              {children}
         </MyCounterContext.Provider>
         
    </div>
  )
}

export default ProviderCounterContext




