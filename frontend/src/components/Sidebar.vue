<template>
    <div>
        <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
        <RouterLink :to="'/'" >  <v-list-item link :title="$t('sideBar.home')"></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink :to="{ name: 'login' }" ><v-list-item link :title="$t('sideBar.login')"></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'apartmandetails' }" ><v-list-item link :title="$t('sideBar.apartmandetails')"></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'apartmanservices' }" ><v-list-item link :title="$t('sideBar.apartmanservices')"></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'housedetails' }" ><v-list-item link :title="$t('sideBar.housedetails')"></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'chart' }" ><v-list-item link title=" chart"></v-list-item></RouterLink>

        <!-- <RouterLink :to="{ name: '' }" ><v-list-item link title=""></v-list-item></RouterLink> -->
        <!-- <RouterLink :to="{ name: '' }" ><v-list-item link title=""></v-list-item></RouterLink> -->

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