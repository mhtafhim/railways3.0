import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {
     const [menu,setMenu]= useState("Railway");

  return (
    <div className='navbar'>
     <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Railway E-Service</p>
     </div>
     <ul className="nav-menu">
        <li onClick={()=>{setMenu("Railway")}}><Link style={{textDecoration:'none', color: "black" }} to='/railway'>Railway</Link>{menu==="railway"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("TrainSchedule")}}><Link style={{textDecoration:'none', color: "black" }} to='/Train Schedule'>Train Schedule</Link>{menu==="Train Schedule"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Live Location")}}><Link style={{textDecoration:'none', color: "black" }} to='/Live Location'>Live Location</Link>{menu==="Live Location"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Book")}}><Link style={{textDecoration:'none', color: "black" }} to='/Booking'>Booking</Link>{menu==="Book"?<hr/>:<></>}</li>
        
     </ul>
     <div className="nav-login">
       <Link to = '/login'>  <button>Login</button></Link>
     </div>
    </div>
  )
}
