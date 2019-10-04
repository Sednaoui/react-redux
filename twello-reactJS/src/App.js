import React from 'react';
import './App.css';
import List from './List';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <List title="List 1" type="todo" />
      </header>
    </div>
  );
}

export default App;
