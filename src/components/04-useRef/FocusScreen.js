import React, { useRef } from "react";
import "../../components/02-useEffect/form.css";

export const FocusScreen = () => {
  const ref = useRef();

  const handleClick = (e) => {
    ref.current.select();
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={ref} className="form-control" placeholder="nombre" />
      <button onClick={handleClick} className="btn btn-danger mt5">
        Click here
      </button>
    </div>
  );
};
