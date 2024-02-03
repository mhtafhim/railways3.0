import React, { useState } from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import './SideBar.css'
 import { Link } from 'react-router-dom';
function SideBar({openSidebarToggle, OpenSidebar}) {
    const [menu,setMenu]= useState("DashBoard");
    const isAdminArea = window.location.pathname.startsWith('/Admin');
  return (
    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsPeopleFill  className='icon_header'/> ADMIN
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li onClick={()=>{setMenu("DashBoard")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/DashBoard'>
                <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>{menu==="DashBoard"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("TrainSchedule")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/Train Schedule'>
                <BsFillArchiveFill className='icon'/>Train schedule
                </Link>{menu==="TrainSchedule"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("UpdateTrain")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/UpdateTrain'>
                <BsFillArchiveFill className='icon'/> Update Train schedule
                </Link>{menu==="UpdateTrain"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("Booking")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/Booking'>
                <BsFillArchiveFill className='icon'/>Booking
                </Link>{menu==="Booking"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("LiveLocation")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/LiveLocation'>
                <BsFillArchiveFill className='icon'/> Live Location
                </Link>{menu==="LiveLocation"?<hr/>:<></>}
        </li>
       
        <li onClick={()=>{setMenu("CustomerInfo")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/CustomerInfo'>
                <BsFillArchiveFill className='icon'/>
                <BsPeopleFill className='icon'/> Customers
                </Link>{menu==="CustomerInfo"?<hr/>:<></>}
        </li>
       
        <li onClick={()=>{setMenu("ReportAdmin")}} className='sidebar-list-item'>
        <Link style={{textDecoration:'none', color: "white" }} to='/ReportAdmin'>
                <BsMenuButtonWideFill className='icon'/> Reports
                </Link>{menu==="ReportAdmin"?<hr/>:<></>}
        </li>
       
    </ul>
</aside>
  )
}

export default SideBar