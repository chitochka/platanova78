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
      return http.get(`/user/${id}`); }
  
    checkEmailOrTelofon(data){
        return http.post("/user/email",data)
      
    }
  
    getEmail(data) {
      return http.post("/user/email",data)
    }

    getTelefon(data) {
      return http.post("/user/telefon",data)
    }

    create(data) {
      return http.post("/user", data);
    }
  
/*
    update(id, data) {      return http.put(`/user/${id}`, data); }
    delete(id) {      return http.delete(`/user/${id}`); }
    deleteAll() {      return http.delete(`/user`); }
    findByTitle(title) {      return http.get(`/user?title=${title}`); }
*/
  }
  
  export default new UserDataService();
  