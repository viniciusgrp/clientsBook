import axios from "axios";

export const api = axios.create({
  // baseURL: "https://clientsbook.onrender.com",
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
