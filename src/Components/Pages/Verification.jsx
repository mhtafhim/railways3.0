import React, { useContext, useState } from "react";
import "./Verification.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../App";
import { USER_TYPES } from "./UserType";

export const Verification = () => {
	const { currentUserType, setCurrentUserType } = useContext(userContext);
	console.log(currentUserType);
	const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();

		const verificationCode = event.target.otp.value;

		const pendingUser = JSON.parse(sessionStorage.getItem("pendingUser"));
		console.log(pendingUser);
		//pendingUser.otp == verificationCode
		if (parseInt(pendingUser.randomOtp) === parseInt(verificationCode)) {
			const url = "https://localhost:7007/api/Reg/sign_up";
			const { data } = await axios.post(url, pendingUser);

			localStorage.setItem("token", data.token);
			sessionStorage.removeItem("pendingUser");
			localStorage.setItem("userData", JSON.stringify(data.user));
			alert("Sign Up Successful");

			setCurrentUserType(USER_TYPES.NORMAL_USERS);
			navigate("/railway");
		} else {

			alert("Invalid OTP");
		}

		console.log(event.target.otp.value);
	};
	return (
		<div className="verification-code-form">
			<h2>Verification Code</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="otp" placeholder="Enter verification code" />
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};
export default Verification;
