import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5005/api",
  withCredentials: true,
});

const authService = {
  //   constructor() {
  //     this.service = axios.create({
  //       baseURL: "http://localhost:5005/api",
  //       withCredentials: true,
  //     });
  //   }

  login: (username, password) => {
    return service
      .post("/auth/login", {
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
      .get("/auth/loggedIn")
      .then((results) => {
        console.log(results.data);
        return results.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  signup: (username, password, email) => {
      return service.post("/auth/signup", {
          username: username,
          password: password,
          email: email,
      })
      .then((results) => {
          return results.data;
      });
  },

  logout: () => {
      return service.post("/auth/logout")
      .then((results) => {
        console.log(results.data);
        return results.data;
      })
  }

  
};

export default authService;
