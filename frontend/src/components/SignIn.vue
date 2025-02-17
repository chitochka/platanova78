<template>
  <v-container style="height: 80%">
    <v-row align="center" style="height: 100%;" no-gutters>
      <v-col>

        <v-card class="mx-auto" min-width="500" max-width="800">
          <v-card-title class="text-h6 font-weight-regular justify-space-between">
            <span> Prihlaseni</span>
            <!--<v-avatar color="primary" size="24">{{ step }}</v-avatar>-->
          </v-card-title>
          <form>

            <v-window>
              <!--<v-window v-model="step">-->

              <!-- 1 -->
              <v-window-item :value="1">
                <v-card-text>
                  <v-text-field v-model.trim="userData.email" label="Zadejte vas email?"
                    :error-messages="v$.userData.email.$errors.map(e => e.$message)" required
                    @input="v$.userData.email.$touch" variant="outlined" @keypress="this.alert = false"
                    prepend-inner-icon="mdi-email-outline" clearable :class="this.alert ? 'err' : ''">
                  </v-text-field>

                  <v-text-field v-model="userData.password" @input="v$.userData.password.$touch"
                    :error-messages="v$.userData.password.$errors.map(e => e.$message)" label="Password"
                    variant="outlined" clearable required :type="_passwordVisible ? 'text' : 'password'"
                    :append-inner-icon="_passwordVisible ? 'mdi-eye-off' : 'mdi-eye'" prepend-inner-icon="mdi-lock-outline"
                    @click:append-inner="_passwordVisible = !_passwordVisible"></v-text-field>

                  <v-alert border-color="error" border="start" v-model="alert" closable
                    v-text="this.alert.message || 'Данный Email уже зарегистрирован'" type="error" density="comfortable"
                    variant="elevated" elevation="10"></v-alert>
                </v-card-text>
              </v-window-item>
            </v-window>
          </form>
          <v-divider></v-divider>

          <v-card-actions>
            <v-btn elevation="5" color="primary" variant="flat" :loading="loading" @click='signIn' :disabled="disabled">
              <!--{{$t('components.btnBack')}}-->
              Prihlasit se
            </v-btn>

          </v-card-actions>

        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import router from '../router/index.js'
import { useAuthStore } from "../stores/auth.js";
import {  useVuelidate } from '@vuelidate/core'
import {
  required,
  email,
  minLength
} from '@vuelidate/validators'
import {   useI18n} from 'vue-i18n'
import UserDataService from '../services/UserDataService'
import { vMaska } from "maska/vue"

export default {
  setup() {
    const store = useAuthStore()
    const v$ = useVuelidate()
    const { t } = useI18n()
    return { v$, t , store}
  },
  directives: {
    maska: vMaska
  },
  data: () => ({
    alert: false,
    loading: false,
    /*
    userData: {email: '', password: "", confirmPassword: '', firstName: "",
      lastName: "", apartNum: null, telefon: "", vlastnik: false },
    */
    userData: {
      email: 'eeee@ee.ee',
      password: "11111",
    },
    _passwordVisible: false
  }),
  validations() {
    return {
      userData: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(5)
        },
      }
    }
  },
  computed: {
    disabled() {
      return (
        this.v$.userData.email.$invalid || this.v$.userData.password.$invalid
      )
    }
  },
  methods: {
    signIn(e) {
      this.loading = true
      UserDataService.signIn({
        email: this.userData.email.toLocaleLowerCase(),
        password: this.userData.password
      })
        .then((res, req) => {
          console.log('OK \n res.data  = ', res.data)
          if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
            const store = useAuthStore()
            store.login()
            console.info('\n - - - === store.isLoggedIn = ')
            console.info(store.isLoggedIn)
          }
          router.push('/home')

        }).catch(e => {
          this.alert = {
            message: "Email  либо Пароль НЕверны !"
          }
          setTimeout(() => {
            this.alert = false
          }, 4300)
          console.log('\n\n E R R O R   =='); console.log(e);
        }).finally(() => {
          this.loading = false
        })
    },
  },
  mounted() {
    console.log('mount')
    window.vv = this
  }
}
</script>


<style scope>
.err .v-field__input {
  color: #b20827 !important;
  /* border : 1px solid red; */
}

.v-text-field {
  margin-bottom: 5px;
}
</style>