import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("otra vez yo");
  return (
    <button
      onClick={() => {
        increment();
      }}
      className="btn btn-warning"
    >
      Incrementar
    </button>
  );
};
