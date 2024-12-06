import React from 'react';

function EmployeeDashboard() {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      {/* Display employee information, recent leave history, etc. */}
      <p>Welcome, [Employee Name]!</p>
      <p>Your Role: [Employee Role]</p>
      <p>Department: [Employee Department]</p>

      {/* Add more components or sections as needed */}
      <div>
        <h3>Recent Leave History</h3>
        {/* Display a table or list of recent leave applications */}
      </div>

      <div>
        <h3>Upcoming Leave</h3>
        {/* Display upcoming leave schedules */}
      </div>
    </div>
  );
}

export default EmployeeDashboard;