import React from 'react';
import PropTypes from 'prop-types';

class EditText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
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
        const { value } = this.state;
        const { onSave } = this.props;

        event.preventDefault();
        this.setState({
            isInEditMode: false,
        });
        onSave(value);
    }

    renderEditView = () => {
        const { value } = this.state;

        return (
            <div>
                <form onSubmit={this.updateValue}>
                    <input
                        type="text"
                        value={value}
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
    }

    renderDefaultView = () => {
        const { value } = this.state;

        return (
            <h3 onDoubleClick={this.changeEditMode}>
                {value}
            </h3>
        );
    }

    render() {
        const { isInEditMode } = this.state;

        return isInEditMode
            ? this.renderEditView()
            : this.renderDefaultView();
    }
}

EditText.propTypes = {
    value: PropTypes.string,
    onSave: PropTypes.func,
};

EditText.defaultProps = {
    value: '',
    onSave: (val) => val,
};

export default EditText;
