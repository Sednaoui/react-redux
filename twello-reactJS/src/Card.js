import React from "react";
import "./card.css";

class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul class="scrollList">
                <li class="mycard">{this.props.task}</li>
                <li class="mycard">{this.props.task}</li>
                <li class="mycard">{this.props.task}</li>
            </ul>
        );
    }
}

export default Card;
