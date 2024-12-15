import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
})


class UserDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  checkEmailOrTelofon(data) {
    return http.post("/user/email", data)

  }

  getEmail(data) {
    return http.post("/user/email", data)
  }

  getTelefon(data) {
    return http.post("/user/telefon", data)
  }

  //create(data) {
  signup(data) {
    return http.post("/auth/signup", data);
  }
  signIn(data) {
    console.log('\n\nUserDataService | data =',data)
    return http.post("/auth/signin", data);
  }

}

export default new UserDataService();