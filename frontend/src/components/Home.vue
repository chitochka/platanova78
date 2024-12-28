<template>
  <div>
    <h2> DashBoard <hr /> H0me Page</h2>
  <v-sheet>
    <button elevation="5" color="primary" variant="flat" @click='stahnout'>
      Stahnout
    </button>

    <v-row>
      <v-col>
        <v-card max-width="" variant="outlined" title="Uzivatelske udaje">
          <v-list lines="one">
            <v-list-item
              v-for="(value, key) in uData" :key="key" :title="key + '  = ' + value "
              ></v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

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

data() {
return {
uData: null,
};
},



methods: {
stahnout (arg) {
const data = JSON.parse(localStorage.user)

UserDataService.getUserData({
_id: data.id
})
.then((res, req) => {
this.uData = res.data[0]
}).catch(e => {
console.log(' get User Data ERROR = ', e);
}).finally(()=> {})

}
}, //methods
mounted() {
window.vv = this

const data = JSON.parse(localStorage.user)
console.log('--> M O N T E D---');
UserDataService.getUserData({
_id: data.id
})
.then((res, req) => {
this.uData = res.data.data[0]
}).catch(e => {console.log('\n\n e r r or/ ==', e); })
.finally(()=> {})

}// mounted

}





</script>

<style scoped>
.v-carousel {
height: 100%;
max-height: 950px;

}
</style>