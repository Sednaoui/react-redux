import React from "react";
import "./App.css";
import List from "./components/List";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <List title="List 1" type="todo" />
        </header>
      </div>
    );
  }
}

export default App;
