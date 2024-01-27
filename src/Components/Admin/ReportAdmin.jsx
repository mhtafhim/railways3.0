import React from 'react'
import './ReportAdmin.css'
export const ReportAdmin = () => {
  return (
    <div className="table-container">
      <table className="customer-report-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Report 1</td>
          </tr>
          <tr>
            <td>67890</td>
            <td>Report 2</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  )
}
