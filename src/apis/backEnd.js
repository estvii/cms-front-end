import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000',
    // headers: {
    //   'Authorization': 'Bearer'
    // },
  })

// axios.post("/clients")
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// axios.get("/clients")
//   .then(res => console.log(res))
//   .catch(err => console.log(err))