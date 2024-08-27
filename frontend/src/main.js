/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// import Vuelidate from 'vuelidate'

// Composables
import { createApp } from 'vue'
import {createI18n, useI18n } from 'vue-i18n'
import languages from "./i18n"
import router from "./router"
import '@mdi/font/css/materialdesignicons.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
// app.use(Vuelidate)

const messages = Object.assign(languages)

const i18n = createI18n({
    legacy:false,
    fallBackLocale:'cs',
    locale :'cs',
    messages
})

const app = createApp(App)
registerPlugins(app)
app.use(i18n)
app.use(router)
app.mount('#app')

/*

http://prodej-bytu.refido.cz/index.php?str=cena

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
github token
*/