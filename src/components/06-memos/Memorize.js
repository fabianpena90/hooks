import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

import "../02-useEffect/form.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button onClick={increment} className="btn btn-primary">
        Add
      </button>

      <button className="btn btn-secondary ml-5" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
