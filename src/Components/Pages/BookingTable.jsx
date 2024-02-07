import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export const BookingTable = () => {
	
	const [action, setAction] = useState("Stop");
	const navigate = useNavigate();
	const handleButtonClick = (trainId) => {
		alert(`Button clicked for train ID: ${trainId}`);
		// Add your button click logic here
	};

	const [availableJourney, setAvailableJourney] = useState([]);
	const data = JSON.parse(sessionStorage.getItem("bookingData"));
	//sessionStorage.removeItem("bookingData");

	  console.log(data);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://localhost:7007/api/Booking/get_available_trains",
					{
						params: {
							startStation: data.from,
							destinationStation: data.to,
							journeyDate: data.date,
						},
					}
				);

				setAvailableJourney(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	// console.log(data);

	console.log(availableJourney);
/*
	businessSeat: 80;
	businessSeatBooked: 1;
	departureTime: "10:30:00";
	destinationArrivalTime: "14:30:00";
	destinationStation: "Station D";
	ecoSeat: 120;
	economySeatBooked: 0;
	firstClassSeat: 50;
	firstClassSeatBooked: 0;
	journeyDate: "2024-02-11";
	journeyId: 2001;
	startStation: "Station C";
	totalCoach: 8;
	totalSeat: 250;
	trainId: 102;
	trainName: "Rapid 102";
  
*/
	return (
		<div className="train-table-container">
			<table className="train-table">
				<thead>
					<tr>
						<th>Train Name</th>
            <th>Start Station</th>
            <th>Destination Station</th>
            <th>Journey Date</th>
            <th>Departure Time</th>
            <th>Destination Arrival Time</th>
            <th>Economy Seat</th>
            <th>Business Seat</th>
            <th>First Class Seat</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{availableJourney.map((item, index) => (
						<tr key={index}>
							<td>{item.trainName}</td>
              <td>{item.startStation}</td>
              <td>{item.destinationStation}</td>
              <td>{item.journeyDate}</td>
              <td>{item.departureTime}</td>
              <td>{item.destinationArrivalTime}</td>
              <td>{item.ecoSeat - item.economySeatBooked}</td>
              <td>{item.businessSeat - item.businessSeatBooked}</td>
              <td>{item.firstClassSeat - item.firstClassSeatBooked}</td>
							<td>
								<button onClick={() => setAction("Forward")}>Action</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default BookingTable;
