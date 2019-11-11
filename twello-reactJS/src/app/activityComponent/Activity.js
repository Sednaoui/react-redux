import React from 'react';
import '../listComponent/list.css';
import './activity.css';
import PropTypes from 'prop-types';

const Activity = (props) => {
    const { activityProp } = props;

    return (
        <div className="myContainer myActivity">
            <div
                className="addList"
                action="" />
            <h3>
My activity
            </h3>
            <ul
                id="myListofActivity"
                className="scrollList">
                <p>
                    {activityProp}
                </p>
            </ul>
        </div>
    );
};

Activity.propTypes = {
    activityProp: PropTypes.arrayOf(PropTypes.any),
};

Activity.defaultProps = {
    activityProp: [],
};
export default Activity;
