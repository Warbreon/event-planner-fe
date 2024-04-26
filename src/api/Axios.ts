import axios from "axios";

const tempToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndXkuaGF3a2luc0BnbWFpbC5jb20iLCJpYXQiOjE3MTQwODY5MjUsImV4cCI6MTcxNDE3MzMyNX0.8gxwuowTP5fPTq025oxRnbXuzS0VmqST_RzL6STUIYEqH81lHWpDo7HB1kybSZSfaRl8ZRexjv9S80i_vrSAgQ';

const API = axios.create({
  baseURL: "https://raisav-api.devbstaging.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${tempToken}`,
  }
});

export default API;
