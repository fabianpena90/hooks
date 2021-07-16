import React from "react";

export const DeleteButton = ({ todo, handleDelete }) => {
  return (
    <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
      Delete
    </button>
  );
};
