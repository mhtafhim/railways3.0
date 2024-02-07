import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

import { USER_TYPES } from "../Pages/UserType";
import { userContext } from "../../App";
//const currentUserType = USER_TYPES.PUBLIC;
export const Navbar = () => {
   
	const { currentUserType, setCurrentUserType } = useContext(userContext);
	//	console.log(currentUserType);
	const [menu, setMenu] = useState("Railway");

	const profileData = JSON.parse(localStorage.getItem("userData"));
	console.log(profileData);

	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={logo} alt="" />
				<p>Railway E-Service</p>
			</div>
			<ul className="nav-menu">
				<li
					onClick={() => {
						setMenu("railway");
					}}>
					<Link
						style={{ textDecoration: "none", color: "black" }}
						to="/railway">
						Railway
					</Link>
					{menu === "railway" ? <hr /> : <></>}
				</li>
				<li
					onClick={() => {
						setMenu("Train Schedule");
					}}>
					<Link
						style={{ textDecoration: "none", color: "black" }}
						to="/Train Schedule">
						Train Schedule
					</Link>
					{menu === "Train Schedule" ? <hr /> : <></>}
				</li>

				{currentUserType === USER_TYPES.NORMAL_USERS && (
					<li
						onClick={() => {
							setMenu("Book");
						}}>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to="/Booking">
							Booking
						</Link>
						{menu === "Book" ? <hr /> : <></>}
					</li>
				)}

				{currentUserType === USER_TYPES.NORMAL_USERS && (
					<li
						onClick={() => {
							
                     setCurrentUserType(USER_TYPES.NORMAL_USERS);
                     setMenu("Live Location");
                     localStorage.removeItem("token");
                     localStorage.removeItem("userData");
						}}>
						Logout
						{menu === "Live Location" ? <hr /> : <></>}
					</li>
				)}
			</ul>

			{currentUserType === USER_TYPES.PUBLIC && (
				<div className="nav-login">
					<Link to="/login">
						{" "}
						<button>Login</button>
					</Link>{" "}
				</div>
			)}

			{(currentUserType === USER_TYPES.NORMAL_USERS ||
				currentUserType === USER_TYPES.ADMIN_USER) && (
				<div className="nav-logedin">
					You are logged in as: {profileData.name}
				</div>
			)}
		</div>
	);
};
