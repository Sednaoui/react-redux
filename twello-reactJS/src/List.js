import React from "react";
import Card from './Card'
import "./List.css";

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

export default List;