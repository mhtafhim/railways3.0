import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookingFrom.css";
import { useNavigate } from "react-router-dom";

export const BookingFrom = ({ quantity, trainClass }) => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		quantityOfTicket: "",
		trainClass: "First Class",
	});

	const [fares, setFares] = useState([]);

	const [journeyID, setJourneyID] = useState({});
	const [userID, setUserID] = useState({});
	const [bookingData, setBookingData] = useState({});

	useEffect(() => {
		setJourneyID(localStorage.getItem("journeyID"));
		//  localStorage.removeItem("journeyID");
		setBookingData(JSON.parse(localStorage.getItem("journeyData")));
		console.log(journeyID);
		setUserID(JSON.parse(localStorage.getItem("userData")).id);

		// Fetch fares data from API
		const fetchFares = async () => {
			try {
				const response = await axios.get(
					"https://localhost:7007/api/Booking/get_fare"
				);
				setFares(response.data);
			} catch (error) {
				console.error("Error fetching fares:", error);
			}
		};

		fetchFares();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//https://localhost:7007/api/Booking/add_booking
	/*{
  "journey_ID": 2010,
  "user_ID": 1003,
 
  "class": "First Class",
  "noOfTickets": 3,
  "totalPrice": 10
}*/
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		const url = "https://localhost:7007/api/Booking/add_booking";
		const totalFare = calculateTotalFare();
		const bookingFormData = {
			journey_ID: journeyID,
			user_ID: userID,
			class: formData.trainClass,
			noOfTickets: formData.quantityOfTicket,
			totalPrice: totalFare,
		};
		console.log(bookingFormData);

    console.log(bookingData);

    if(bookingFormData.noOfTickets <= 0){
      alert("Please enter a valid number of tickets");
    }
    else if(bookingFormData.class === "First Class" && bookingData.firstClassSeat >= bookingFormData.noOfTickets ){
      const { data } = axios.post(url, bookingFormData);
      console.log(data);
      alert("Booking Successful");
      navigate("/Booking");
    }
    else if(bookingFormData.class === "Business" && bookingData.businessSeat >= bookingFormData.noOfTickets){
      const { data } = axios.post(url, bookingFormData);
      console.log(data);
      alert("Booking Successful");
      navigate("/Booking");
    }
    else if(bookingFormData.class === "Economy" && bookingData.ecoSeat >= bookingFormData.noOfTickets){
      const { data } = axios.post(url, bookingFormData);
      console.log(data);
      alert("Booking Successful");
      navigate("/Booking");
    }
    else
    {
      alert("Not enough seats available");
    }


	};

	// Calculate total fare amount based on quantity of tickets and train class
	const calculateTotalFare = () => {
		const fareObject = fares.find(
			(fare) => fare.class_Type === formData.trainClass
		);
		const farePerTicket = fareObject ? fareObject.fare_Amount : 0;
		const totalFare = parseInt(formData.quantityOfTicket, 10) * farePerTicket;
		return totalFare;
	};

	return (
		<div className="form-container">
			<h2>Ticket Details</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="quantityOfTicket">Quantity of Ticket:</label>
					<input
						type="text"
						id="quantityOfTicket"
						name="quantityOfTicket"
						value={formData.quantityOfTicket}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="trainClass">Train Class:</label>
					<select
						id="trainClass"
						name="trainClass"
						value={formData.trainClass}
						onChange={handleChange}>
						<option value="First Class">First Class</option>
						<option value="Business">Business</option>
						<option value="Economy">Economy</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="totalFare">Total Fare Amount:</label>
					<div>{calculateTotalFare()}</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
