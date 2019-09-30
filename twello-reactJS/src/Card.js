import React from "react";
import "./card.css";
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="scrollList">
                <li className="mycard">{this.props.task}</li>
            </ul>
        );
    }
}

Card.defaultProps = {
    task: 'This is a card'
};
Card.propTypes = {
    task: PropTypes.string
};

export default Card;
