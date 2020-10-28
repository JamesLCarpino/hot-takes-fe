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

  return <div></div>;
}
