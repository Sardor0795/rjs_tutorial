import axios from "axios";
import React from "react";

export const Axios = () => {
  axios({
    url: "https://jsonplaceholder.typicode.com/users",
  }).then((res) => console.log(res.data));
  return <div>Axios</div>;
};
