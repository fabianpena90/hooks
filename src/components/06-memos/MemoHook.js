import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/form.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button onClick={increment} className="btn btn-primary">
        Add
      </button>

      <button className="btn btn-secondary ml-3" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
