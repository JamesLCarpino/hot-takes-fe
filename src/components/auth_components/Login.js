import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const history = useHistory();
  //might change this to handle in a reducer
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

  const onSubmit = (values) => {
    setLoading(true);
    axiosWithAuth()
      .post("auth/login", values)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/my-home");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          label="username"
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          ref={register({ required: true })}
        />
        <p className="error-message">
          {errors.username && "Unique Username Required"}
        </p>

        {/* <input
          label="email"
          type="email"
          id="email"
          placeholder="Enter Email"
          ref={register({ require: true })}
        />
        <p className="error-message">
          {errors.email && "Unique Email Required"}
        </p> */}

        <input
          label="password"
          type="password"
          name="password"
          placeholder="Enter Password"
          ref={register({ required: true })}
        />
        <p className="error-message">
          {errors.password && "Password Required"}
        </p>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
