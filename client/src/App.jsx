import React from 'react';
import AddUserForm from './components/AddUserForm';
import AdviceForm from './components/AdviceForm';
import AdviceDisplay from './components/AdviceDisplay';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Welcome to Advisor</h1>
        {/* <p>Edit <code>src/App.jsx</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>

      {/* User Login Form at the top of the page */}
      <section className="User-section">
        <AddUserForm />
      </section>

      {/* Advisory section in the middle of the page */}
      <section className="Advice-section">
        <AdviceForm />
        <AdviceDisplay />
      </section>
    </div>
  );
}

export default App;