import React from "react";
import Card from './Card'
import "./List.css";
import PropTypes from 'prop-types';

class List extends React.Component {
    render() {
        const task = 'Task'
        return (
            <div class="myMainContainer">
                <div class="myContainer myList">
                    <h3>List1</h3>
                    <Card task={task}/>
                </div>  
            </div>
        );
    }
}

Card.propTypes = {
    task: PropTypes.string
};

export default List;
