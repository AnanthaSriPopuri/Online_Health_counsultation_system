import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Perform any necessary logout actions here

    // Redirect to the default page
    window.location.href = 'http://localhost:3000/'; // Replace with the desired URL
  };

  // Render a button that triggers the logout functionality
  return (
    <button onClick={handleLogout} style={{ color: 'black' }}>Logout</button>
  );
};

export default Logout;