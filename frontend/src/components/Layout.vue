<template>
	<div>
		<h2>LAYOUT</h2>
	</div>
</template>

<script>

import { useUserStore } from "../stores/userStore.js";
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from 'pinia'


export default {
  setup() {
  console.log("setup")
		const store = useUserStore()
		return {
			store
		};
	},
	data() {
		return {
	    authStore : useAuthStore()
		};
	},
	mounted(){
	  console.log('Mounteed & this.store= ')
	  window.vvv = this
	  
 console.log(this.store)
	  /*
 console.log('\n\n')
	  
const { name, doubleCount } = storeToRefs(this.store)
const { increment } = this.store
*/

	}
};
</script>
