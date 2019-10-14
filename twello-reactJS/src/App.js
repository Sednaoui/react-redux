import React from 'react';
import './App.css';
import './Components/list.css';
import { connect } from 'react-redux';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Activity from './Components/Activity';
import AddListComponent from './Components/AddListComponent';

const App = (props) => {
    const { lists, activities } = props;

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <div className="myMainContainer">
                    {lists.map((list) => (
                        <List
                            type="todo"
                            list={list} />
                    ))}
                    <Activity
                        activityProp={activities.map((activity) => (
                            <li>
                                {activity}
                            </li>
                        ))} />
                    <AddListComponent />
                </div>
            </header>
        </div>
    );
};

const mapStateToProps = (state) => ({
    lists: state.reducer,
    activities: state.activityReducer,
});

export default connect(mapStateToProps)(App);
