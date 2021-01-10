import axios from "axios";

export default axios.create({
  baseURL: "https://api.enrolledagent.org",
<<<<<<< HEAD
  'Content-Type': 'application/json',
  'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
  "Authorization": `Bearer ${localStorage.getItem("token")}`,
  "Access-Control-Allow-Origin": "*"
=======
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb',
    "Authorization": `Bearer ${localStorage.getItem("token")}`
}
>>>>>>> ad5f4803af66c0c71dda61abee0ba7a0fbf02863
});
