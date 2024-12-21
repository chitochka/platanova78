<template>
  <div>
    <h2> DashBoard <hr /> H0me Page</h2>
  <v-sheet>
    <button elevation="5" color="primary" variant="flat" @click='stahnout'>
      Stahnout
    </button>
  </v-sheet>
</div>
</template>

<script>

import UserDataService from '../services/UserDataService'
import {
useI18n
} from 'vue-i18n'


export default {
setup() {
const {
t
} = useI18n()
return {
t
}
},
methods: {
stahnout (arg) {
const data = JSON.parse(localStorage.user)
console.log('UserDataService.js---> data =')
console.log(data)
UserDataService.getUserData({
email: data.email
})
.then((res, req) => {
console.log("\n\n_==-==--==-=-HOMe RESPONS  user");
console.log(res)
console.log(res.data)
}).catch(e => {
console.log('\n\n e ==');
console.log(e);
}).finally(()=> {})



}
},
mounted() {
console.log('mount HOME')
window.vv = this



}
}





</script>

<style scoped>
.v-carousel {
height: 100%;
max-height: 950px;

}
</style>