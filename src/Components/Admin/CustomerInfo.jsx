import React, { useState } from 'react'
import './CustomerInfo.css';
export const CustomerInfo = () => {
    const initialData = [
        { customerId: '12345', customerPhone: '555-123-4567', customerEmail: 'customer@example.com', bookedTicketId: '7890' },
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
    <div className="table-container">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Customer"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Customer Phone</th>
          <th>Customer Email</th>
          <th>Booked Ticket ID</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{item.customerId}</td>
            <td>{item.customerPhone}</td>
            <td>{item.customerEmail}</td>
            <td>{item.bookedTicketId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
