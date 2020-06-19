import React from "react";

class ListInput extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleButtonSubmit() {
    this.props.addToList(this.state.userInput);
    this.setState({ userInput: "" });
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="userInput"
          onChange={this.handleChange}
          value={this.state.userInput}
        />
        <button type="submit" onClick={this.handleButtonSubmit}>
          Add to List
        </button>
      </form>
    );
  }
}

export default ListInput;
