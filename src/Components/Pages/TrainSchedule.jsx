import React, { useState } from 'react';
import './TrainSchedule.css'
export const TrainSchedule = () => {
  const initialData = [
    { trainId: '123', startStation: 'Station A', destinationStation: 'Station B', departureTime: '09:00', duration: '2 hours', destinationArrivalTime: '11:00' },
    { trainId: '456', startStation: 'Station C', destinationStation: 'Station D', departureTime: '10:30', duration: '1.5 hours', destinationArrivalTime: '12:00' },
    // Add more data as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredResults = initialData.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="train-table-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Train"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
      <table className="train-table">
        <thead>
          <tr>
            <th>Train ID</th>
            <th>Start Station</th>
            <th>Destination Station</th>
            <th>Departure Time</th>
            <th>Duration</th>
            <th>Destination Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.trainId}</td>
              <td>{item.startStation}</td>
              <td>{item.destinationStation}</td>
              <td>{item.departureTime}</td>
              <td>{item.duration}</td>
              <td>{item.destinationArrivalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TrainSchedule;