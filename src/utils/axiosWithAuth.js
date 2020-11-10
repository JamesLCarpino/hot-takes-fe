import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiSmFtZXMiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYwNDYwNjc1OSwiZXhwIjoxNjA1MDM4NzU5fQ.h0bhVXuTP9ijHl9dLjRmShr10-DJ2_cSk2-gsZPeZwg";
  console.log("TOKEN", token);
  return axios.create({
    baseURL: "https://hot-takes.herokuapp.com/",
    //baseURL: "https://localhost:5000/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};
