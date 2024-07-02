import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        {/* <Link to="/user-details">User Details</Link>
        <Link to="/platter-details">Platter Details</Link>
        <Link to="/daily-update-form">Daily Update Form</Link>
        <Link to="/daily-update-info">Daily Update Info</Link> */}
        <Link to="/signup">Signup Page</Link><br/><br/>
        <Link to="/login">Login Page</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
