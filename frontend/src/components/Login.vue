<template>
  <!--    TEST  VUelidate   -->

  <!-- <input type="text" :value="name" @input="setName">
  test = [{{ test }}]

  <v-text-field v-model="test" :error-messages="v$.test.$errors.map(e => e.$message)" label="E-mail"
      @input="v$.test.$touch" @blur="v$.test.$touch" required></v-text-field>
  {{ v$.test }}
  <hr>
  error = {{ v$.test.$errors }} -->

<!-- --------------------- -->

  <v-layout align-center justify-center>
      <v-card class="mx-auto" min-width="500">
          <v-card-title class="text-h6 font-weight-regular justify-space-between">
              <span>{{ currentTitle }}</span>
              <v-avatar color="primary" size="24">{{ step }}</v-avatar>

          </v-card-title>
          <form>

              <v-window v-model="step">
                  <v-window-item :value="1">
                      <v-card-text>
                          <!-- <v-text-field v-model="dataUser.email"
                          :error-messages="v$.dataUser.email.$errors.map(e => e.$message)" label="E-mail" required
                          @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field> -->
                          <v-text-field v-model="email" :error-messages="v$.email.$errors.map(e => e.$message)"
                              required></v-text-field>
                          <!-- <v-text-field label="Password" type="password"></v-text-field> -->
                          <!-- <v-text-field label="Confirm Password" type="password"  v-if="true"></v-text-field> -->

                          <!-- <v-text-field label="Email" placeholder="john@google.com"></v-text-field> -->
                          <span class="text-caption text-grey-darken-1"> Zadejte , prosim, Vas email</span>
                          <span class="text-caption text-grey-darken-1"> {{ test }}</span>
                      </v-card-text>
                  </v-window-item>

                  <v-window-item :value="2">
                      <v-card-text>

                          <v-text-field v-model="name" :error-messages="v$.name.$errors.map(e => e.$message)"
                              :counter="10" label="Jak se jmenujete?" required @input="v$.name.$touch"
                              @blur="v$.name.$touch"></v-text-field>
                          <v-text-field v-model="telefon" :error-messages="v$.name.$errors.map(e => e.$message)"
                              :counter="10" label="Telefon:" required @input="v$.name.$touch"
                              @blur="v$.name.$touch"></v-text-field>
                          <v-select v-model="apartNum" :items="Array.from({ length: 13 }, (v, i) => i + 1)"
                              :error-messages="v$.apartNum.$errors.map(e => e.$message)" label="Ze ktereho jste bytu? "
                              required @change="v$.apartNum.$touch" @blur="v$.apartNum.$touch"></v-select>

                          <!-- <v-checkbox v-model="state.checkbox" :error-messages="v$.checkbox.$errors.map(e => e.$message)"             label="Jste vlastnik bytu??" required @change="v$.checkbox.$touch" @blur="v$.checkbox.$touch"></v-checkbox> -->


                          <!-- <v-text-field label="Password" type="password"></v-text-field>
                  <v-text-field label="Confirm Password" type="password"></v-text-field>
                  <span class="text-caption text-grey-darken-1">                        Please enter a password for your account                    </span> -->
                      </v-card-text>
                  </v-window-item>

                  <v-window-item :value="3">
                      <div class="pa-4 text-center">

                          <h3 class="text-h6 font-weight-light mb-2">
                              Welcome to Vuetify
                          </h3>
                          <span class="text-caption text-grey">Thanks for signing up!</span>
                      </div>
                  </v-window-item>
              </v-window>
          </form>
          <!-- <v-divider></v-divider> -->

          <v-card-actions>
              <v-btn v-if="step > 1" variant="text" @click="step--">
                  Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step < 3" color="primary" variant="flat" :loading="loading" @click="nextStep(step)"
                  :disabled="this.v$.email.$error">
                  Next
              </v-btn>
          </v-card-actions>
      </v-card>
  </v-layout>
</template>
<script>



import { useVuelidate } from '@vuelidate/core'
import { required, numeric, email } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
      name: '',
      step: 1,
      loading: false,
      email: '',
      password: "",
      firstName: "",
      lastName: "",
      apartNum: null,
      telefon: "",
      vlastnik: false,
      test: '',
      items: Array.from({ length: 13 }, (v, i) => i + 1)
  }),
  validations() {
      return {
          name:  { required },
          email: { required, email },
          password: { required },
          firstName: { required },
          lastName: { required },
          apartNum: { required, numeric },
          telefon: { required },
          vlastnik: { required },
          test: { required, email },
      }
  },
  computed: {
      currentTitle() {
          switch (this.step) {
              case 1: return 'Registrace noveho uzivatele '
              case 2: return 'Create a password'
              default: return 'Account created'
          }
      },
  },
  methods: {
      nextStep: function () {
          this.loading = true;
          setTimeout(() => {
              this.loading = false
              this.step++

          }, 1500);

      }
  },
  mounted() {
      console.log('mount')
  }
}
</script>