import axios from "axios";

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiY2QwODdjM2Y5MjA0YjE3YTk5NTBlMDA2OTA0ODFmZGU1MDM1YWQ1NjI5MmE2NDIxMjIzMjFjYjk1NmZkMjdkNTY5OGMyYmRiZDM2OTM0MjgyZTlhOTE3Njg3MDhiZjI0ZGQyZTFkNjNhNGNmY2UwMWYyODE0NTRmZTg2ZmZkZmFiOTc2OGNlNTkwYjFkODgwZGZmZTE1N2QyOTY5MTU1OGQ1OGNmNDhkNGUwMGMyNDE3ZTIzNWQ4ZTZjZDgwM2NmNGJiMzQzMjk1ZjBlMThlMjQyNjllMmE4NzM1NDZmNWVjMjQ5ZWIzNGM5NTU4N2M3YzEzMTNmYjZhNWFiMTVjNmIwY2MxMDVjNzI2MDI5ODU0OWIwNjMwMjM4MjQ1Y2RmYjE4ZDAzMDI5MjE3MGU1NWNhMjE3NDhkMzc2MjgxNmZmMThiMmNlNmM4MTAxM2RlM2RmODI4MjM3NzljM2EyZDE1OTUxN2UwZTlmMDFhIiwiaXNzIjoiY29tLndpc2VtaW5kc3NvbHV0aW9ucyIsImF1ZCI6IlVTRVIiLCJpYXQiOjE2MDk5MzU2NDUsImV4cCI6MTYwOTk3ODg0NX0.pcJPN-njBq4-0EiIJGspgvM8mWXe-ZCx4CKsT_qw-c8';
export default axios.create({
  baseURL: "https://api.enrolledagent.org/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "apikey" : "fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb",
    'X-Auth-Token': `Bearer ${token}`
  },
});
