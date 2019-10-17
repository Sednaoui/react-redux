import React from 'react';
import './App.css';
import './listComponent/list.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './listComponent/List';
import Navbar from './navBarComponent/Navbar';
import Activity from './activityComponent/Activity';
import AddListComponent from './listComponent/AddListComponent';

const App = (props) => {
    const { lists, activities } = props;
    const listIds = Object.keys(lists);
    const activityIds = Object.keys(activities);

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <div className="myMainContainer">
                    {listIds.map((listId) => (
                        <List
                            type="todo"
                            list={lists[listId]}
                            key={listId} />
                    ))}
                    <Activity
                        activityProp={activityIds.map((activityId) => (
                            <li key={activityId}>
                                {activities[activityId].activityName}
                            </li>
                        ))} />
                    <AddListComponent />
                </div>
            </header>
        </div>
    );
};

const mapStateToProps = (state) => ({
    lists: state.listReducer.lists,
    activities: state.activityReducer.activities,
});

App.propTypes = {
    lists: PropTypes.objectOf(PropTypes.any),
    activities: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
    lists: {},
    activities: {},
};

export default connect(mapStateToProps)(App);
