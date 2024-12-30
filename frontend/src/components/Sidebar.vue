<template>
    <div>
        <v-list lines="one" variant="outlined" nav active-class="active" color="red" elevation="0" >
            <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
            <RouterLink :to="'/'" >  <v-list-item link :title="$t('sideBar.slash')"></v-list-item></RouterLink>
            <v-divider></v-divider>
            <RouterLink :to="'/home'" >  <v-list-item link :title="$t('sideBar.home')"></v-list-item></RouterLink>
            <v-divider></v-divider>
            <RouterLink :to="{ name: 'login' }" ><v-list-item link :title="$t('sideBar.login')"></v-list-item></RouterLink>
            <RouterLink :to="{ name: 'apartmandetails' }" ><v-list-item link :title="$t('sideBar.apartmandetails')"></v-list-item></RouterLink>
            <RouterLink :to="{ name: 'apartmanservices' }" ><v-list-item link :title="$t('sideBar.apartmanservices')"></v-list-item></RouterLink>
            <RouterLink :to="{ name: 'housedetails' }" ><v-list-item link :title="$t('sideBar.housedetails')"></v-list-item></RouterLink>
            <RouterLink :to="{ name: 'chart' }" ><v-list-item link title=" chart"></v-list-item></RouterLink>
            <RouterLink :to="{ name: 'calendaruklid' }" ><v-list-item link title="calendaruklid"></v-list-item></RouterLink>
  
            <RouterLink :to="{ name: 'signin' }" ><v-list-item link
            title="signin"></v-list-item></RouterLink>

            <!-- <RouterLink :to="{ name: '' }" ><v-list-item link title=""></v-list-item></RouterLink> -->
            <!-- <RouterLink :to="{ name: '' }" ><v-list-item link title=""></v-list-item></RouterLink> -->
        </v-list>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
// const { t} = useI18n()

export default {
    setup(){
        const {t} = useI18n() 
        return {t}
    },
}


</script>


<style scoped>
a { text-decoration: none; }

.v-list-item:hover {
    box-shadow: 0 0 3px blue;
    color: lightseagreen;
}

.v-list-item{
    font-size: 125%;
    padding: 25px;
    margin: 5px;
}
</style>