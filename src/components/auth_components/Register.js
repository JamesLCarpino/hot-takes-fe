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
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            ref={register({ required: true })}
          />
          <p className="error-message">
            {errors.username && "Unique Username Required"}
          </p>
        </label>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            ref={register({ require: true })}
          />
          <p className="error-message">
            {errors.email && "Unique Email Required"}
          </p>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            ref={register({ required: true })}
          />
          <p className="error-message">
            {errors.password && "Password Required"}
          </p>
        </label>
        <label htmlFor="confirm">
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            ref={register({ required: true })}
          />
          <p className="error-message">
            {errors.confirm && "Password does not match"}
          </p>
        </label>
        <button type="submit">Sign up!</button>
      </form>
      <p className="member">
        Already a member serving up hot takes? <Link to="/login">Login In</Link>
      </p>
    </div>
  );
}
