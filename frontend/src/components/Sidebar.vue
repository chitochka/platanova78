<template>
    <div>
        <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
        <RouterLink :to="'/'" >  <v-list-item link title="Home"></v-list-item></RouterLink>
        <v-divider></v-divider>
        <RouterLink :to="{ name: 'login' }" ><v-list-item link title="Login"></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'apartmandetails' }" ><v-list-item link title="Tech.info bytu"></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'apartmanservices' }" ><v-list-item link title=" Provoz/Sluzby bytu "></v-list-item></RouterLink>
        <RouterLink :to="{ name: 'chart' }" ><v-list-item link title=" chart"></v-list-item></RouterLink>

        <!-- <RouterLink :to="{ name: '' }" ><v-list-item link title=""></v-list-item></RouterLink> -->
        <!-- <RouterLink :to="{ name: '' }" ><v-list-item link title=""></v-list-item></RouterLink> -->

    </div>
</template>

<script>
export default {

}


</script>