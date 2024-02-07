import React, { useEffect, useState } from 'react';
import './TrainSchedule.css'
import axios from 'axios';
export const TrainSchedule = () => {
  const initialData = [
    { trainId: '123', startStation: 'Station A', destinationStation: 'Station B', departureTime: '09:00', duration: '2 hours', destinationArrivalTime: '11:00' },
    { trainId: '456', startStation: 'Station C', destinationStation: 'Station D', departureTime: '10:30', duration: '1.5 hours', destinationArrivalTime: '12:00' },
    // Add more data as needed
  ];

  const [trainScheduleData, setTrainScheduleData] = useState([]);

  useEffect(() => {
    // Fetch train schedule data from the server
    const url = 'https://localhost:7007/api/Train_Schedule/show_train_schedule';
    const fetchData = async () => {
      const response = await axios.get(url);
      setTrainScheduleData(response.data);
    }
    fetchData();
    

  },[]);

  console.log(trainScheduleData);


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
            <th>Train Name</th>
            <th>Destination Arrival Time</th>
            <th>Journey Date</th>
          </tr>
        </thead>
        <tbody>
          {trainScheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.train_ID}</td>
              <td>{item.startStation}</td>
              <td>{item.destinationStation}</td>
              <td>{item.departureTime}</td>
              <td>{item.trainName}</td>
              <td>{item.destinationArrivalTime}</td>
              <td>{item.journeyDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TrainSchedule;


// {filteredData.map((item, index) => (
//   <tr key={index}>
//     <td>{item.trainId}</td>
//     <td>{item.startStation}</td>
//     <td>{item.destinationStation}</td>
//     <td>{item.departureTime}</td>
//     <td>{item.duration}</td>
//     <td>{item.destinationArrivalTime}</td>
//   </tr>
// ))}