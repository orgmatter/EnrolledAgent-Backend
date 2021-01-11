import axios from "axios";

export default axios.create({
  baseURL: "https://api.enrolledagent.org",
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
    "Authorization": `Bearer ${localStorage.getItem("token")}`
}
});