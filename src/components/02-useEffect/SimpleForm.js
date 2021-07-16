import React, { useState, useEffect } from "react";
import "./form.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("formState cambio");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleInputChange}
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={handleInputChange}
          placeholder="email"
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
