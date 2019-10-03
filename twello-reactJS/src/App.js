import React from 'react';
import './App.css';
import List from './List';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <List title="List1"  />
      </header>
    </div>
  );
}

export default App;
