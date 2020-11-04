import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://hot-takes.herokuapp.com/",
    // baseURL: "localhost:5000/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};
