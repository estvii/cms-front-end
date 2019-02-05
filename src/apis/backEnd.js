import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URI
  // "http://localhost:3000"
  // headers: {
  //   'Authorization': 'Bearer'
  // },
});

// axios.post("/clients")
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// axios.get("/clients")
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
