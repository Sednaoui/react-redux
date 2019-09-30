import React from "react";
import Card from './Card'
import "./List.css";

class List extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const title = this.props.title;  
        return (
            <div className="myMainContainer">
                <div className="myContainer myList">
                    <h3>{title}</h3>
                    <Card task="Task 1"/>
                </div>  
            </div>
        );
    }
}

export default List;