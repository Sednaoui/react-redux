import React from "react";
import "./card.css";
import PropTypes from 'prop-types';

const Card = (props) => {
    const { task } = props;
        return (
            <div className="scrollList">
                <p className="mycard">{task}</p>
            </div>
        );
};

Card.defaultProps = {
    task: 'This is a card'
};
Card.propTypes = {
    task: PropTypes.string
};

export default Card;
