import React from 'react';
import './Styles/list.css';
import './Styles/activity.css';

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

export default Activity;
