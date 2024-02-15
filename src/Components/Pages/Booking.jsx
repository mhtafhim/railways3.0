import React from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";
export const Booking = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = e.target;

		const dataObject = {
			from: data.from.value,
			to: data.to.value,
			date: data.date.value,
		};
		console.log(dataObject);

		sessionStorage.setItem("bookingData", JSON.stringify(dataObject));
		navigate("/BookingTable");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="booking-container">
				<div className="search-box">
					<label htmlFor="from">From:</label>
					<input type="text" id="from" />

					<label htmlFor="to">To:</label>
					<input type="text" id="to" />

					<label htmlFor="date">Date of Journey:</label>
					<input type="date" id="date" />

					<button type="submit" id="search-button">
						Search
					</button>
				</div>
			</div>
		</form>
	);
};
