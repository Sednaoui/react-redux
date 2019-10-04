import React from 'react';
import './App.css';
import List from './List';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <List title="List1" type="todo" />
        <List title="List2" type="done" />
      </header>
    </div>
  );
}

export default App;
