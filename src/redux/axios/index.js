import axios from "axios";

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMDhhY2FlNGZlYjU3NTlhNGJmYmI0M2Y1MDZmZGE4YmNiYTVhOGI1ZjVmODU0YzQyNmM3MmYwZGFlOWU5NDY4MTAyNmQ2ZWY1ZjNkNzcwN2ZjZWJkMDUxMzYxNzZiNTZiMWFhOGQyZTdlYTQ2ODI4NTUwNWFhMmIwZmEyZmUyZWZhY2NhMmE3N2Q0MTBiMTM2M2RlZWQzYThkNmViNTEyYjdmNGNkYzQxNjBkZmUwMzNlYmU5M2FjMzBjOTg0OThjOGQ1MzdlYzkwMzdhMzIwYjRmMDBiZDMxNjVlM2Q0ZmI0M2YyODQyYzNhY2U2MjkxZmVkNTQ4ZTcxOGFiMjExY2MyNjBiYjM5MGYwMTc4ODhkYzA3NDBmODc1MTM3YmJkZjUwMDBiMDk4NDI0NzRmYTc0ODdkYmExNGZkNWIxZjJjYmE1YTc5ZGRiM2RlZGMyNTFkNTNlNjEyOWI4NThiOWRhZTliNzEzNzI2ODkyIiwiaXNzIjoiY29tLndpc2VtaW5kc3NvbHV0aW9ucyIsImF1ZCI6IlVTRVIiLCJpYXQiOjE2MDk5NTkxODksImV4cCI6MTYxMDAwMjM4OX0.4y6e6z4rJ6Aal3mqrA5AAPYSQSIH4J37poRSvHTc-fI';
export default axios.create({
  baseURL: "https://api.enrolledagent.org/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "apikey" : "fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb",
    'Authorization': `Bearer ${token}`
  },
});
