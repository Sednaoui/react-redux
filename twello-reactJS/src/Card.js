import React from "react";
import "./card.css";
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="scrollList">
                <p className="mycard">{this.props.task}</p>
            </div>
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
