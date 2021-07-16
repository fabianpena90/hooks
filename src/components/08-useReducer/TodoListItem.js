import React from "react";
import { DeleteButton } from "./DeleteButton";

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        className={`text-center ${todo.done ? "completed" : ""}`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <DeleteButton todo={todo} handleDelete={handleDelete} />
    </li>
  );
};
