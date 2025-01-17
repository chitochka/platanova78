import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({ isLoggedIn : false}),
	getters: {
		// doubleCount: state => state.count * 2
	},
	actions: {
	  login() {
	    this.isLoggedIn = true
	  },
	  logout() {
	    this.isLoggedIn = false
	  },
	}
});
