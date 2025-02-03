<template>
	<div>
		<h2>LAYOUT</h2>
		<button @click="getUsersData" class="primary">get allUsersData</button>
	</div>
</template>

<script>
import { useUserStore } from "../stores/userStore.js";
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from "pinia";

import UserDataService from "../services/UserDataService";

export default {
	setup() {
		console.log("setup");
		const store = useUserStore();
		return {
			store
		};
	},
	data() {
		return {
			authStore: useAuthStore()
		};
	},
	methods: {
		getUsersData() {
			console.log("user data services");
			UserDataService.getAllUsersData()
				.then((res, req) => {
					console.log("loyout users data");
					console.log(res);
				})
				.catch(e => {
					console.log("ERROR loyout users data");
					console.log(e);
				})
				.finally(() => {});
		}
	},
	mounted() {
		console.log("Mounteed & this.store= ");
		window.vvv = this;

		console.log(this.store);
		/*
 console.log('\n\n')
	  
const { name, doubleCount } = storeToRefs(this.store)
const { increment } = this.store
*/
	}
};
</script>


<style scope>
  button{
    border:1px solid blue;
  }
  
  
</style>

