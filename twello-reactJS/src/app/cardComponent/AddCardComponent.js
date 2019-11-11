import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionsCard from './actionCreator';
import AddComponent from '../addComponent/AddComponent';

class AddCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e) {
        const { value } = this.state;
        // eslint-disable-next-line no-shadow
        const { list, actionsCard } = this.props;

        e.preventDefault();
        if (!value.trim()) {
            return;
        }
        actionsCard.addTask(value, list.listID);
        this.setState({ value: '' });
    }

    render() {
        const { value } = this.state;

        return (
            <AddComponent
                value={value}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                type="Add Card" />
        );
    }
}

AddCardComponent.propTypes = {
    list: PropTypes.objectOf(PropTypes.any),
    actionsCard: PropTypes.objectOf(PropTypes.any),
};

AddCardComponent.defaultProps = {
    list: {},
    actionsCard: {},
};

const mapDispatchToProps = (dispatch) => ({
    actionsCard: bindActionCreators(
        { ...actionsCard },
        dispatch,
    ),
});

export default connect(
    null,
    mapDispatchToProps,
)(AddCardComponent);