import React from 'react';
import './App.css';
import './listComponent/list.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { bindActionCreators } from 'redux';
import List from './listComponent/List';
import Navbar from './navBarComponent/Navbar';
import Activity from './activityComponent/Activity';
import AddListComponent from './listComponent/AddListComponent';
import * as actionsList from './listComponent/listActionCreator';
import * as actionsCard from './cardComponent/actionCreator';

class App extends React.Component {
    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        const { cardActions, listActions } = this.props;

        if (!destination) {
            return;
        }

        if (
            destination.drappableId === source.draggableId
            && destination.index === source.index
        ) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            listActions.reorderCards(destination, source, draggableId);
        } else {
            cardActions.changeCardLocation(destination, source, draggableId);
        }
    }

    render() {
        const { lists, activities } = this.props;
        const listIds = Object.keys(lists);
        const activityIds = Object.keys(activities);

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
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
            </DragDropContext>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.listReducer.lists,
    activities: state.activityReducer.activities,
});

const mapDispatchToProps = (dispatch) => ({
    listActions: bindActionCreators(
        { ...actionsList },
        dispatch,
    ),
    cardActions: bindActionCreators(
        { ...actionsCard }, dispatch,
    ),
});

App.propTypes = {
    lists: PropTypes.objectOf(PropTypes.any),
    activities: PropTypes.objectOf(PropTypes.any),
    cardActions: PropTypes.objectOf(PropTypes.any),
    listActions: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
    lists: {},
    activities: {},
    cardActions: {},
    listActions: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
