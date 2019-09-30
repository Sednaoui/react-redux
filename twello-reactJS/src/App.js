import React from 'react';
import './App.css';
import List from './List';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <List/>
      </header>
    </div>
  );
}

export default App;
