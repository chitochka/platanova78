<template>
  <v-app :theme="_theme">

    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="_drawer = !_drawer"></v-app-bar-nav-icon>
      <v-app-bar-title> Registrace noveho uzivatele </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn :prepend-icon="_theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="changeTheme">
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="_drawer">
      <nav> SideBar </nav>
    </v-navigation-drawer>

    <v-main d-flex align-center justify-center>
      <Login></Login>
    </v-main>
    <AppFooter />
  </v-app>
</template>



<script>
export default {
  data() {
    return {
      _theme: 'light',
      _drawer: false
    }
  },
  methods: {
    changeTheme() {
      this._theme = this._theme === 'light' ? 'dark' : 'light'
    }
  }
}


</script>
