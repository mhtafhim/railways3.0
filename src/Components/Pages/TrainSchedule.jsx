import React, { useState } from 'react';

export const TrainSchedule = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
    const placeholderData = [
      { trainNumber: '123', departureTime: '08:00', arrivalTime: '12:00', destination: 'City A' },
      { trainNumber: '456', departureTime: '10:30', arrivalTime: '14:30', destination: 'City B' },
    ];

    
    const filteredResults = placeholderData.filter((train) =>
      train.trainNumber.includes(searchQuery) || train.destination.includes(searchQuery)
    );

    setSearchResults(filteredResults);
  };
  return (
    <div className='train-search-container'>
    <div className="header">
      <div className="text" style={{textDecoration:'none', color: "white" }}>Train Schedule Search</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
        <input
          type="text"
          placeholder="Enter train number or destination"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
    <div className="results-container">
      {searchResults.length > 0 ? (
        <table className="train-table">
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((train, index) => (
              <tr key={index} className="train-item">
                <td>{train.trainNumber}</td>
                <td>{train.departureTime}</td>
                <td>{train.arrivalTime}</td>
                <td>{train.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found</p>
      )}
    </div>
  </div>
  );
};
export default TrainSchedule;