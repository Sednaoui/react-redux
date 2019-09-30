import React from "react";
import "./card.css";

class Card extends React.Component {
    render() {
        return (
            <ul class="scrollList">
                <li class="mycard">Hello World</li>
                <li class="mycard">Hello Willo</li>
                <li class="mycard">Hello Alex</li>
            </ul>
        );
    }
}

export default Card;
