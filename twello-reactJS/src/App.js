import React from "react";
import "./App.css";
import "./components/List.css";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import { addList } from "./Actions/listActionCreator";
import Activity from "./components/Activity";

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
    const { dispatch, listID } = this.props;
    dispatch(addList(this.state.value, listID));
    this.setState({ value: "" });
  }

  render() {
    const { lists, activities } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="myMainContainer">
            {lists.map(list => (
              <List type="todo" list={list} />
            ))}
            <Activity
              activityProp={activities.map(activity => (
                <li>{activity}</li>
              ))}
            />
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit">Add List</button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.reducer,
  activities: state.activityReducer
});

export default connect(mapStateToProps)(App);
