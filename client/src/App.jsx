import React from 'react';
import AddUserForm from './components/AddUserForm';
import AdviceForm from './components/AdviceForm';
import AdviceDisplay from './components/AdviceDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="Navbar">
        <div className="Navbar-title">
          <h1>Welcome to Advisor</h1>
        </div>
        <div className="Navbar-login">
          <AddUserForm />
        </div>
      </nav>

      {/* Hero Section for Advice Input/Output */}
      <div className="Hero">
        <AdviceForm />
        <AdviceDisplay />
      </div>
    </div>
  );
}

export default App;