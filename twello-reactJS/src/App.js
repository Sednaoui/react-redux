import React from 'react';
import './App.css';
import './Components/list.css';
import List from './Components/List';
import Navbar from './Components/Navbar';
import { connect } from 'react-redux';
import Activity from './Components/Activity';
import AddListComponent from './Components/AddListComponent';

class App extends React.Component {
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
            <AddListComponent />
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
