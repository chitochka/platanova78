<template>
  <v-app :theme="_theme">
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="_drawer = !_drawer"></v-app-bar-nav-icon>
      <v-app-bar-title> Registrace noveho uzivatele </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn :prepend-icon="_theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="changeTheme"
      ></v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-select :item-props="itemProps" :items="items" ></v-select>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="_drawer">
        <SideBar></SideBar>

      </v-navigation-drawer>

    <v-main d-flex align-center justify-center>
      <router-view></router-view>
      <!-- <Login></Login> -->
         </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<script>
import SideBar from './components/Sidebar.vue'
export default {
  setup(){
    const {t} = useI18n() 
    return {t}
  },
  data() {
    return {
      _theme: "light",
      _drawer: false,
      items: [
        {
          name: 'Cestina',
          icon: 'mdi-weather-sunny',
        },
        {
          name: 'Русский',
          icon: 'mdi-weather-sunny',
        },
        {
          name: 'English',
          icon: 'mdi-weather-sunny',
        }

      ]
    };
  },
  methods: {
    itemProps(item) {
        return {
          title: item.name,
          appendIcon: item.icon,
        }
      },
    changeTheme() {
      this._theme = this._theme === "light" ? "dark" : "light";
    },
  },
};
</script>
