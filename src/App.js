import React from "react";
import ListInput from "./components/ListInput";
import ListDisplay from "./components/ListDisplay";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(item) {
    this.setState({ todos: [...this.state.todos, item] });
  }

  removeFromList(index) {
    const tempArr = this.state.todos.slice();
    tempArr.splice(index, 1);
    this.setState({ todos: tempArr });
  }

  render() {
    return (
      <>
        <h1>My Todo List</h1>
        <ListInput addToList={this.addToList} />
        <ListDisplay
          removeFromList={this.removeFromList}
          todos={this.state.todos}
        />
      </>
    );
  }
}

export default App;
