import React, { useContext, useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { USER_TYPES } from "./UserType";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../../App";
export const LoginSignup = ({ setUserType }) => {
  const { currentUserType, setCurrentUserType } = useContext(userContext);
	const [action, setAction] = useState("Login");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (action === "SignUp") {
			// console.log(e.target.name.value);return ;

			const form = e.target;
			const formData = {
				name: form?.name?.value,
				phoneNumber: form?.phone?.value,
				nid: form?.nid?.value,
				email: form?.email?.value,
				password: form?.password?.value,
				randomOtp: Math.floor(1000 + Math.random() * 9000),
			};

			console.log(formData);

			if (!formData.name || !formData.phoneNumber || !formData.nid) {
				alert("Please fill up the form properly");
				return;
			}

			sessionStorage.setItem("pendingUser", JSON.stringify(formData));

			console.log(formData.randomOtp);

			const url = "https://localhost:7007/api/Reg/send_otp";
			const { data } = await axios.post(url, {
				email: formData.email,
				name: formData.name,
				otp: formData.randomOtp,
			});

			navigate("/Verification");

			// localStorage.setItem("token", data.token);
		} else if (action === "Login") {
      try {
        const url = "https://localhost:7007/api/Reg/login";
        const { data } = await axios.post(url, {
          email: e.target.email.value,
          password: e.target.password.value,
        });

        localStorage.setItem("token", data.token);
        sessionStorage.removeItem("pendingUser");
        localStorage.setItem("userData", JSON.stringify(data.user));
        alert("Login Successful");

        setCurrentUserType(USER_TYPES.NORMAL_USERS);
        navigate("/railway");
      }
      catch (err) {
       // alert("Invalid Email or Password");
      }
		
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="container">
				<div className="header">
					<div className="text">{action}</div>
					<div className="underline"></div>
				</div>
				<div className="inputs">
					{action === "Login" ? null : (
						<>
							<div className="input">
								<input type="text" name="name" placeholder="Name" />
							</div>
							<div className="input">
								<input type="text" name="phone" placeholder="Phone Number" />
							</div>
							<div className="input">
								<input type="text" name="nid" placeholder="NID Number" />
							</div>
						</>
					)}

					<div className="input">
						<input type="email" name="email" placeholder="Email Id" />
					</div>
					<div className="input">
						<input type="password" name="password" placeholder="Password" />
					</div>

					{action === "SignUp" ? null : (
						<div className="forgot-password">
							Lost Password?<span>Click Here!</span>
						</div>
					)}

					<div className="Submit-container">
						<button
							type="submit"
							className={action === "Login" ? "submit gray" : "submit"}
							onClick={() => {
								setAction("SignUp");
							}}>
							Sign Up
						</button>
						<div className="Submit-container">
							<button
								className={action === "SignUp" ? "submit gray" : "submit"}
								onClick={() => {
									setAction("Login");
								}}>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
