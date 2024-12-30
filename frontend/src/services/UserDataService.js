import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:8080/api",
	headers: {
		"Content-type": "application/json"
	}
});

http.interceptors.request.use(
	function (config) {
			console.log("\n\n Requeets   interceptor\n\nhttp/axios = ", config);
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
);


function authHeader() {
	let user = JSON.parse(localStorage.getItem('user'));

	if (user && user.accessToken) {
		console.log(' {x-acccess-Token : ', user.accessToken);

		// for Node.js Express back-end
		return { 'x-access-token': user.accessToken };
	} else {
		return {};
	}
}


	class UserDataService {
		getAll() {
			return http.get("/user");
		}

		get(id) {
			return http.get(`/user/${id}`);
		}

		getUserData(data) {
			return http.post("/user/userData",  data, { headers: authHeader() });
		}

		checkEmailOrTelofon(data) {
			return http.post("/user/email", data);
		}

		getEmail(data) {
			return http.post("/user/email", data);
		}

		getTelefon(data) {
			return http.post("/user/telefon", data);
		}

		signup(data) {
			return http.post("/auth/signup", data);
		}
		signIn(data) {
			return http.post("/auth/signin", data);
		}
	}

	export default new UserDataService();
