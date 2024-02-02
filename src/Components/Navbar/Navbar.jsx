import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom';
const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USERS: "Normal Users",
  ADMIN_USER: "Admin User ",
};
const CURRENT_USER_TYPE = USER_TYPES.NORMAL_USERS;
export const Navbar = () => {
     const [menu,setMenu]= useState("Railway");
    
  return (
    <div className='navbar'>
     <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Railway E-Service</p>
     </div>
     <ul className="nav-menu">
        <li onClick={()=>{setMenu("railway")}}><Link style={{textDecoration:'none', color: "black" }} to='/railway'>Railway</Link>{menu==="railway"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Train Schedule")}}><Link style={{textDecoration:'none', color: "black" }} to='/Train Schedule'>Train Schedule</Link>{menu==="Train Schedule"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Live Location")}}><Link style={{textDecoration:'none', color: "black" }} to='/Live Location'>Live Location</Link>{menu==="Live Location"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Book")}}><Link style={{textDecoration:'none', color: "black" }} to='/Booking'>Booking</Link>{menu==="Book"?<hr/>:<></>}</li>
        
     </ul>
    
     
     {CURRENT_USER_TYPE===USER_TYPES.PUBLIC && <div className="nav-login"><Link to = '/login'> <button>Login</button></Link>   </div>}
  
     


     <div className="nav-logedin">
      You are logged in as: {CURRENT_USER_TYPE}
     </div>

    </div>
  )
  
}



