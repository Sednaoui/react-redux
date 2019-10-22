import React from 'react';
import PropTypes from 'prop-types';
import './addComponent.css';

const AddComponent = (props) => {
    const { value, onSubmit, onChange, type } = props;

    return (
        <form
            onSubmit={onSubmit}
            className="add-component-style">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={type} />
            <button
                type="submit"
                className="add-component-style">
                {type}
            </button>
        </form>
    );
};

AddComponent.proTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
};

AddComponent.defaultProps = {
    value: '',
    onSubmit: () => {},
    onChange: () => {},
    type: '',
};

export default AddComponent;
