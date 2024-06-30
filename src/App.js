import React from 'react';
import './App.css';
import User from "./Component/UserInfo/User";
import { UserProvider } from './context/UserContext';
import { PlatterProvider } from './context/PlatterContext';
import Platter from './Component/PlatterInfo/Platter';

function App() {
  return (
    <UserProvider>
      <PlatterProvider>
        <div className="App">
          <h1>User Data</h1>
          <User />
          <Platter/>
        </div>
      </PlatterProvider>
    </UserProvider>
  );
}

export default App;
