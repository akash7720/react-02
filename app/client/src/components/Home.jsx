import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext';
import { MycounterContext } from './Context/ProviderCounterContext';


 

const Home = () => {
   const{counter,Increment,Decrement,Reset}=useContext(MycounterContext);
  
   const {state,LOGOUT}=useContext(AuthContext)
   console.log(state,"state");
    
  //  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
       <h1>Home Page:-{state?.user?.name}</h1>
       <h2>CounterContext:{counter}</h2>
       <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button><br/>
        <button onClick={LOGOUT}>LogOut</button>

         {/* <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p> */}
     
    </div>
  )
}

export default Home;




