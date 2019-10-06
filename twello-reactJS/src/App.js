import React from "react";
import "./App.css";
import List from "./components/List";
import Navbar from "./Navbar";
import { addTask } from "./Actions/actionCreator";
import { store } from "./index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    store.dispatch(addTask(this.state.value));
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <List title="List 1" type="todo" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">Add Card</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
