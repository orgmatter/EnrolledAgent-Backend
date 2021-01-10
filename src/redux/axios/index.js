import axios from "axios";

export default axios.create({
  baseURL: "https://api.enrolledagent.org",
  'Content-Type': 'application/json',
  'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
  "Authorization": `Bearer ${localStorage.getItem("token")}`,
  "Access-Control-Allow-Origin": "*"
});
