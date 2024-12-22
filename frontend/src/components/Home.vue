<template>
  <div>
    <h2> DashBoard <hr /> H0me Page</h2>
  <v-sheet>
    <button elevation="5" color="primary" variant="flat" @click='stahnout'>
      Stahnout
    </button>
    <hr />

  <v-col>
    <v-card max-width="500" variant="">
      <v-container>
        <h3>  {{$t('view.apartDetails.dTable.title')}}</h3>
        <v-row class="rowTable" align="start" no-gutters v-for="(value, key) in
        userData" :key="key">
          <v-col cols="9">
            {{ $t('view.apartDetails.dTable.'+ key) }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3">
            {{ value }} 
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>

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
data () {
  return {
    userData: {}
  },
},
methods: {
stahnout (arg) {
const data = JSON.parse(localStorage.user)

UserDataService.getUserData({
_id: data.id
})
.then((res, req) => {
console.log("\n\n_==-==--==-=-HOMe RESPONS  user");
console.log(res)
console.log(res.data)
}).catch(e => {
console.log('\n\n e r r or/ ==', e); console.log(e)
}).finally(()=> {})



}
},
mounted() {
console.log('mount HOME')
window.vv = this

const data = JSON.parse(localStorage.user)
console.log('--> M O N T E D---');
UserDataService.getUserData({
_id: data.id
})
.then((res, req) => {
console.log("\n\n_==-==--==-=-HOMe RESPONS  user");
console.log(res)
console.log(res.data)
}).catch(e => {
console.log('\n\n e r r or/ ==', e); console.log(e)
})
.finally(()=> {})



}
}





</script>

<style scoped>
.v-carousel {
height: 100%;
max-height: 950px;

}
</style>