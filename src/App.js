import React, { useState } from 'react';
import './App.css';

function App() {

  const UserList = ["ram", "sham", "sita", "gita", "rajat"];

  const [user, setUser] = useState(UserList);

  return (
    <div className="App">
      <h1>User Data</h1>
      <h2>{user.map( (user) => <li>{user}</li>  )}</h2>
    </div>
  );
}

export default App;
