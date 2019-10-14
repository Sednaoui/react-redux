import React from 'react';
import PropTypes from 'prop-types';

class EditText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            isInEditMode: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    changeEditMode = () => {
        this.setState((prevState) => ({ isInEditMode: !prevState.isInEditMode }));
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    updateValue(event) {
        event.preventDefault();
        this.setState({
            isInEditMode: false,
        });
        this.props.onSave(this.state.value);
    }

    renderEditView = () => (
        <div>
            <form onSubmit={this.updateValue}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange} />
                <input
                    type="submit"
                    value="OK" />
                <button
                    type="button"
                    onClick={this.changeEditMode}>
X
                </button>
            </form>
        </div>
    );

    renderDefaultView = () => (
        <h3 onDoubleClick={this.changeEditMode}>
            {this.state.value}
        </h3>
    );

    render() {
        return this.state.isInEditMode
            ? this.renderEditView()
            : this.renderDefaultView();
    }
}

EditText.propTypes = {
    value: PropTypes.string,
};

EditText.defaultProps = {
    value: '',
};

export default EditText;
