import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/NavbarCss.css'

const Navbar = () => {
  const router =useNavigate()
  return (
    <div className='nav-1'>
         <div>
             #sky**
         </div>

         <div>
          <p onClick={()=>router('/')}>Home</p>
         </div>

         <div>
           <p onClick={ ()=>router('/Register')}>Register</p> 
           <p onClick={ ()=>router('/Login')}>Login</p>
                
         </div>
    </div>
  )
}

export default Navbar