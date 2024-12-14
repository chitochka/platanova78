<template>
  <v-container style="height: 80%">
    <v-row align="center" style="height: 100%;" no-gutters>
      <v-col>

        <v-card class="mx-auto" min-width="500" max-width="800">
          <v-card-title class="text-h6 font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar color="primary" size="24">{{ step }}</v-avatar>
          </v-card-title>
          <form>

            <v-window v-model="step">

              <!-- 1 -->
              <v-window-item :value="1">
                <v-card-text>
                  <v-text-field v-model.trim="userData.email" label="Zadejte vas email?"
                    :error-messages="v$.userData.email.$errors.map(e => e.$message)" required
                    @input="v$.userData.email.$touch" variant="outlined" @keypress="this.alert = false"
                    prepend-inner-icon="mdi-email-outline" clearable  :class="this.alert?'err': ''"
                    >
                  </v-text-field>
                  <!-- <span v-if="!v$.email.$errors.length" class="text-caption text-grey-darken-1 warning "> Zadejte , prosim, Vas email</span> -->
                  <v-alert
                    border-color="error" border="start"
                    v-model="alert" closable v-text="this.alert.message || 'Данный Email уже зарегистрирован'" type="error" density="comfortable"
                    variant="elevated" elevation="10"
                    ></v-alert>
                </v-card-text>
                a@a.aa
              </v-window-item>

              <!-- 2 -->
              <v-window-item :value="2">
                <v-card-text>
                  <v-text-field v-model="userData.password" @input="v$.userData.password.$touch" :error-messages="v$.userData.password.$errors.map(e => e.$message)"
                    label="Password" variant="outlined" clearable
                    required
                    :type="_passwordVisible ? 'text': 'password'"
                    :append-inner-icon="_passwordVisible ? 'mdi-eye-off': 'mdi-eye'"
                    prepend-inner-icon="mdi-lock-outline"
                    @click:append-inner="_passwordVisible = !_passwordVisible"
                    ></v-text-field>
                  <v-text-field v-model="userData.confirmPassword"  @input="v$.userData.confirmPassword.$touch"  :error-messages="v$.userData.confirmPassword.$errors.map(e => e.$message)"
                    label="Confirm Password" variant="outlined" clearable
                    required
                    :type="_passwordVisible ? 'text': 'password'"

                    ></v-text-field>
                  <span class="text-caption text-grey-darken-1"> Please enter a password for your
                    account
                  </span>
                </v-card-text>
              </v-window-item>

              <!-- 3  -->
              <v-window-item :value="3">
                <v-card-text>

                  <v-text-field v-model="userData.firstName"
                    :error-messages="v$.userData.firstName.$errors.map(e => e.$message)" label="Jmeno"
                    required @input="v$.userData.firstName.$touch" @blur="v$.userData.firstName.$touch"
                    variant="outlined" clearable>
                  </v-text-field>
                  <v-text-field v-model="userData.lastName"
                    :error-messages="v$.userData.lastName.$errors.map(e => e.$message)" label="Primeni"
                    required @input="v$.userData.lastName.$touch" @blur="v$.userData.lastName.$touch" variant="outlined" clearable>
                  </v-text-field>
                  <v-text-field v-model="userData.telefon"
                    :error-messages="v$.userData.telefon.$errors.map(e => e.$message)" label="Telefon:" required
                    @input="v$.userData.telefon.$touch" @blur="v$.userData.telefon.$touch" variant="outlined" clearable :class="this.alert?'err': ''"
                    @keypress="this.alert = false" persistent-counter
                    >
                  </v-text-field>

                  <v-alert
                    border-color="error" border="start"
                    v-model="alert" closable text='Данный телефон уже зарегистрирован' type="error" density="comfortable"
                    variant="tonal" elevation="10"
                    ></v-alert>                                    <br v-if="alert">
                  <div class="d-flex ga-2">
                    <v-select v-model="userData.apartNum"
                      :items="Array.from({ length: 13 }, (v, i) => i + 1)"
                      :error-messages="v$.userData.apartNum.$errors.map(e => e.$message)"
                      label="Ze ktereho jste bytu? " required @change="v$.userData.apartNum.$touch"
                      @blur="v$.userData.apartNum.$touch" variant="outlined">
                    </v-select>

                    <v-checkbox v-model="userData.vlastnik"
                      :error-messages="v$.userData.vlastnik.$errors.map(e => e.$message)"
                      label="Jste vlastnik bytu??" @change="v$.userData.vlastnik.$touch"
                      @blur="v$.userData.vlastnik.$touch">
                    </v-checkbox>
                  </div>

                </v-card-text>
              </v-window-item>

              <!-- 4 -->
              <v-window-item :value="4">
                <div class="pa-4 text-center">

                  <h3 class="text-h6 font-weight-light mb-2"> Dekujeme za registrace </h3>
                  <span class="text-caption text-grey"> Za chvili budete prihlaseni </span>
                </div>
              </v-window-item>
            </v-window>
          </form>
          <v-divider></v-divider>

          <v-card-actions>
            <v-btn v-if="step > 1" variant="text" @click="step--" elevation="5">
              {{$t('components.btnBack')}}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="step < 4" color="primary" variant="flat" :loading="loading" @click="nextStep(step)" elevation="5"
              :disabled="(this.lastExistTelefon === this.userData.telefon) || (this.lastExistEmail === this.userData.email) || this.disabled || this.alert">
              {{$t('components.btnNext')}}
            </v-btn>
          </v-card-actions>
          email = {{ this.userData.email }}  <br>
          lastExistEmail = {{ lastExistEmail }}<br>
          lastExistTelefon = {{ lastExistTelefon }}<br>
          alert = {{ this.alert }}<br>
          disabled = {{ this.disabled }}
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>

  import {
    useVuelidate
  } from '@vuelidate/core'
  import {
    required,
    numeric,
    email,
    sameAs,
    minLength,
    alpha
  } from '@vuelidate/validators'
  import {
    useI18n
  } from 'vue-i18n'
  import UserDataService from '../services/UserDataService'
  import {
    vMaska
  } from "maska/vue"
  //const { t } = useI18n()


  export default {
    setup () {
      const v$ = useVuelidate()
      const {
        t
      } = useI18n()
      return {
        v$,
        t
      }
    },
    directives: {
      maska: vMaska
    },
    data: () => ({
      alert: false,
      step: 1,
      loading: false,
      lastExistEmail: null,
      lastExistTelefon: null,
      /*
      userData: {email: '', password: "", confirmPassword: '', firstName: "",
        lastName: "", apartNum: null, telefon: "", vlastnik: false },
      */
      userData: {
        email: 'eeee@ee.ee',
        password: "11111",
        confirmPassword: '11111',
        firstName: "Latyshev",
        lastName: "Alexey",
        apartNum: 13,
        telefon: "555000555",
        vlastnik: false
      },
      items: Array.from({
        length: 13
      }, (v, i) => i + 1),
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
          confirmPassword: {
            required,
            minLength: minLength(5),
            sameAs: sameAs(this.userData.password),
          },
          firstName: {
            required,
            alpha,
            minLength: minLength(2)
          },
          lastName: {
            required,
            alpha,
            minLength: minLength(2)
          },
          apartNum: {
            required,
            numeric
          },
          telefon: {
            required,
            numeric,
            minLength: minLength(9)
          },
          vlastnik: {
            required
          }
        }
      }
    },
    computed: {
      currentTitle() {
        switch (this.step) {
        case 1: return this.t('view.login.newRegistration') //'New user registration'
        case 2: return this.t('view.login.createPass')
        case 3: return this.t('view.login.enterYourData') // Enter your data'
        default: return this.t('view.login.accountCreated') //Account created'
        }
      },
      disabled () {
        switch (this.step) {
        case 1: return this.v$.userData.email.$invalid; break
        case 2: return (this.v$.userData.password.$invalid || this.v$.userData.confirmPassword.$invalid); break;
        case 3: return (this.v$.userData.firstName.$invalid || this.v$.userData.lastName.$invalid || this.v$.userData.telefon.$invalid || this.v$.userData.apartNum.$invalid); break

        }
        // if (this.lastExistEmail ) {console.log('last Email= ',this.lastExistEmail);  return true;}
      }

    },
    methods: {
      nextStep: function (e) {
        switch (e) {
        case 1:
          this.loading = true;
          //UserDataService.getEmail({
          UserDataService.checkEmailOrTelofon({
            email: this.userData.email.toLocaleLowerCase()})
          .then((res, req) => {
            this.loading = false
            if (res.data.exist) {
              this.alert = true
              this.lastExistEmail = this.userData.email
              setTimeout(()=> {
                this.alert = false
              }, 2300)
            } else {
              this.step++
            }
            console.log(res.data)

          }).catch(e => {
            this.loading = false
            this.alert = e
            setTimeout(()=> {
              this.alert = false
            }, 4300)
            console.log(e);
          });
          break;
        case 2: this.step++; break
        case 3:
        // pridat loading
          UserDataService.getTelefon({
            telefon: this.userData.telefon.toLocaleLowerCase()})
          .then((res, req) => {
            if (res.data.exist) {
              this.alert = true
              this.lastExistTelefon = this.userData.telefon
              setTimeout(()=> {
                this.alert = false
              }, 2300)
            } else {
              /* save to DB */

              console.log('\n\n   ------->  save  TO BD   <-----')
              console.log('\n\n   ------->  UserDataService.signup=  <-----')
              console.log(UserDataService.signup)

              UserDataService.signup(this.userData)
              .then((res, req) => {
                this.step++
              }).catch(e => {
                console.log('\n\n e ==');
                console.log(e);
              }).finally(()=> {
                this.loading = false
              })
            }
          }).catch(e => {
            this.loading = false
            console.log(e);
          });
          break;
        }
      }
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