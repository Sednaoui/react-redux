import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addList } from './listActionCreator';
import AddComponent from '../addComponent/AddComponent';

class addListComponent extends React.Component {
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

        e.preventDefault();
        if (!value.trim()) {
            return;
        }
        const { dispatch } = this.props;

        dispatch(addList(value));
        this.setState({ value: '' });
    }

    render() {
        const { value } = this.state;

        return (
            <div>
                <AddComponent
                    value={value}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="Add List" />
            </div>
        );
    }
}

addListComponent.propTypes = {
    dispatch: PropTypes.func,

};

addListComponent.defaultProps = {
    dispatch: () => {},
};

const mapStateToProps = (state) => ({
    lists: state.reducer,
});

export default connect(mapStateToProps)(addListComponent);
