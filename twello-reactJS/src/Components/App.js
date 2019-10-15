import React from 'react';
import './Styles/App.css';
import './Styles/list.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import Navbar from './Navbar';
import Activity from './Activity';
import AddListComponent from './AddListComponent';

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
