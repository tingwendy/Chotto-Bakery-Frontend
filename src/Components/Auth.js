import axios from "axios";

const service = axios.create({
  // baseURL: "http://localhost:5005",
  baseURL: "https://sleepy-temple-72330.herokuapp.com",
  withCredentials: true,
});

const authService = {

  login: (username, password) => {
    return service
      .post("/api/auth/login", {
        username: username,
        password: password,
      })
      .then((results) => {
        console.log(results.data);
        return results.data;
      });
  },

  loginTest: () => {
    return service
      .get("/api/auth/loggedIn")
      .then((results) => {
        console.log(results.data);
        return results.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  signup: (username, password, email) => {
      return service.post("/api/auth/signup", {
          username: username,
          password: password,
          email: email,
      })
      .then((results) => {
          return results.data;
      });
  },

  logout: () => {
      return service.post("/api/auth/logout")
      .then((results) => {
        console.log(results.data);
        return results.data;
      })
  },

  customOrder: (body) => {
    return service.post("/custom/new", body)
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  viewCustomOrder: () => {
    return service.get("/custom/view-order" )
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  editCustomOrder: (body) =>{
    return service.put("/custom/edit/:id", body)
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  deleteCustomOrder: () => {
    return service.delete("/custom/cancel/:id")
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  viewAll: () => {
    return service.get("/menu/view-all")
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  viewDetails: () => {
    return service.get("/menu/view/:id")
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  add: (data) => {
    return service.post("/checkout/add", data)
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  handleUpload: (img) => {
    return service.post("/custom/upload-image", img)
    .then((results) => {
      console.log(results.data);
      return results.data;
    })
  },

  toPay: () => {
  return service.post("/payment/paying")
  .then((response)=> {
    console.log("RESPONSE", response);
    const {status} = response;
    console.log("STATUS", status)
    })
  }
  
};

export default authService;
