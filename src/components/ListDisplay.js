import React from "react";

function ListDisplay(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => (
        <li key={Math.random()}>
          {todo}
          <button
            data-testid="x-button"
            onClick={() => props.removeFromList(i)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListDisplay;
