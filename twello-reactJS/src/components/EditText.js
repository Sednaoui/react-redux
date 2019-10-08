import React from "react";
import PropTypes from "prop-types";
class EditText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isInEditMode: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateValue(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: false
    });
    this.props.onSave(this.props.id, this.state.value);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  renderEditView = () => {
    return (
      <div>
        <form onSubmit={this.updateValue}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="OK" />
          <button onClick={this.changeEditMode}>X</button>
        </form>
      </div>
    );
  };

  renderDefaultView = () => {
    return <h3 onDoubleClick={this.changeEditMode}>{this.state.value}</h3>;
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default EditText;
