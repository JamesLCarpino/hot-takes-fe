import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  const history = useHistory();
  //might change this to handle in a reducer
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  const onSubmit = (value) => {
    const { username, email, password } = value;
    const storedValues = {
      email,
      username,
      password,
    };
    axiosWithAuth()
      .post("/auth/register", storedValues)
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div className="register">
      <h2>Register here!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          label="username"
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          ref={register({ required: true })}
        >
          <p classname="error-message">
            {errors.username && "Unique Username Required"}
          </p>
        </input>
        <input
          label="email"
          type="email"
          id="email"
          placeholder="Enter Email"
          ref={register({ require: true })}
        >
          <p classname="error-message">
            {errors.email && "Unique Email Required"}
          </p>
        </input>
        <input
          label="password"
          type="password"
          name="password"
          placeholder="Enter Password"
          ref={register({ required: true })}
        >
          <p classname="error-message">
            {errors.password && "Password Required"}
          </p>
        </input>
        <input
          label="confirm"
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          ref={register({ required: true })}
        >
          <p classname="error-message">
            {errors.confirm && "Password does not match"}
          </p>
        </input>
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}
