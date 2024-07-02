import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., API call to create a new user
    localStorage.setItem('authToken', 'your-token');  // Example token storage
    navigate('/user-details');
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Repeat Password:</label>
          <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
