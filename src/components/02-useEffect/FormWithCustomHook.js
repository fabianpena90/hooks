import React from "react";
import { useForm } from "../../hooks/useForm";
import "./form.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          value={password}
          onChange={handleInputChange}
          placeholder="********"
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};
