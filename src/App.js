import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import { PlatterProvider } from './context/PlatterContext';
import BasicTabs from './component/Header/Tabs/Tabs';
import LoginPage from './component/pages/LoginPage';
import SignupPage from './component/pages/SignupPage';
import Dashboard from './component/pages/Dashboard';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <PlatterProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/user-details"
              element={
                <ProtectedRoute>
                  <BasicTabs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/platter-details"
              element={
                <ProtectedRoute>
                  <BasicTabs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/daily-update-form"
              element={
                <ProtectedRoute>
                  <BasicTabs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/daily-update-info"
              element={
                <ProtectedRoute>
                  <BasicTabs />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
          </Routes>
        </div>
      </PlatterProvider>
    </UserProvider>
  );
}

export default App;
