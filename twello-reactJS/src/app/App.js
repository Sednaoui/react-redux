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
    const { lists, activityList } = props;
    const listIds = Object.keys(lists);

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
                        activityProp={activityList.map((activity) => (
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
    lists: state.listReducer.lists,
    activityList: state.activityReducer.activityList,
});

App.propTypes = {
    lists: PropTypes.objectOf(PropTypes.any),
    activityList: PropTypes.arrayOf(PropTypes.string),
};

App.defaultProps = {
    lists: {},
    activityList: [],
};

export default connect(mapStateToProps)(App);
