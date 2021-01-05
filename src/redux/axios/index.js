import axios from "axios";

export default axios.create({
  baseURL: "https://api.enrolledagent.org/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/vnd.api+json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
