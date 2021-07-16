import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/form.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  let { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading....</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button onClick={increment} className="brn btn-primary">
        Next Quote
      </button>
    </div>
  );
};
