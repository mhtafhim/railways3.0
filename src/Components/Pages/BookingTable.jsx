import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
export const BookingTable = () => {
  const initialData = [
    { trainId: '123', startStation: 'Station A', destinationStation: 'Station B', departureTime: '09:00', duration: '2 hours', destinationArrivalTime: '11:00' },
    { trainId: '456', startStation: 'Station C', destinationStation: 'Station D', departureTime: '10:30', duration: '1.5 hours', destinationArrivalTime: '12:00' },
    // Add more data as needed
  ];
  const [action, setAction] = useState("Stop");
  const navigate = useNavigate();
  const handleButtonClick = (trainId) => {
    alert(`Button clicked for train ID: ${trainId}`);
    // Add your button click logic here
  };

  return (
    <div className="train-table-container">
    <table className="train-table">
      <thead>
        <tr>
          <th>Train ID</th>
          <th>Start Station</th>
          <th>Destination Station</th>
          <th>Departure Time</th>
          <th>Duration</th>
          <th>Destination Arrival Time</th>
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>
        {initialData.map((item, index) => (
          <tr key={index}>
            <td>{item.trainId}</td>
            <td>{item.startStation}</td>
            <td>{item.destinationStation}</td>
            <td>{item.departureTime}</td>
            <td>{item.duration}</td>
            <td>{item.destinationArrivalTime}</td>
            <td>
              <button onClick={() => 
               setAction("Forward")
                }>Action</button>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
export default BookingTable;