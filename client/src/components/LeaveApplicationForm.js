import React, { useState } from 'react';

function LeaveApplicationForm() {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the backend API
    console.log(formData);
    // Clear the form
    setFormData({
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="leaveType">Leave Type:</label>
      <select id="leaveType" name="leaveType" value={formData.leaveType} onChange={handleChange}>
        <option value="sick">Sick Leave</option>
        <option value="casual">Casual Leave</option>
        <option value="vacation">Vacation Leave</option>
      </select>

      <label htmlFor="startDate">Start Date:</label>
      <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />

      <label htmlFor="endDate">End Date:</label>
      <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />

      <label htmlFor="reason">Reason:</label>
      <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange}></textarea>

      <button type="submit">Submit Application</button>
    </form>
  );
}

export default LeaveApplicationForm;