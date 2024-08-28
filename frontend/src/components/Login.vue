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
                                    <v-text-field v-model.trim="email" label="Zadejte vas email?"
                                        :error-messages="v$.email.$errors.map(e => e.$message)" required
                                        @input="v$.email.$touch" variant="outlined"
                                        prepend-inner-icon="mdi-email-outline"
                                    >
                                    </v-text-field>
                                    <span class="text-caption text-grey-darken-1 warning"> Zadejte , prosim, Vas email</span>
                                </v-card-text>
                            </v-window-item>

                            <!-- 2 -->

                            <v-window-item :value="2">
                                <v-card-text>
                                    <v-text-field label="Password" variant="outlined"
                                        required  
                                        :type="_passwordVisible ? 'text' : 'password'"
                                        :append-inner-icon="_passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                                        prepend-inner-icon="mdi-lock-outline"
                                        @click:append-inner="_passwordVisible = !_passwordVisible"
                                        ></v-text-field>
                                    <v-text-field label="Confirm Password" variant="outlined"
                                        required  
                                        :type="_passwordVisible ? 'text' : 'password'"
                                        
                                        ></v-text-field>
                                    <span class="text-caption text-grey-darken-1"> Please enter a password for your
                                        account
                                    </span>
                                </v-card-text>
                            </v-window-item>

                            <!-- 3  -->


                            <v-window-item :value="3">
                                <v-card-text>

                                    <v-text-field v-model="firstName"
                                        :error-messages="v$.firstName.$errors.map(e => e.$message)" label="Jmeno"
                                        required @input="v$.firstName.$touch" @blur="v$.firstName.$touch"
                                        variant="outlined">
                                    </v-text-field>
                                    <v-text-field v-model="lastName"
                                        :error-messages="v$.lastName.$errors.map(e => e.$message)" label="Primeni"
                                        required @input="v$.lastName.$touch" @blur="v$.lastName.$touch" variant="outlined">
                                    </v-text-field>
                                    <v-text-field v-model="telefon"
                                        :error-messages="v$.telefon.$errors.map(e => e.$message)" label="Telefon:" required
                                        @input="v$.telefon.$touch" @blur="v$.telefon.$touch" variant="outlined">
                                    </v-text-field>
                                    <div class="d-flex ga-2">
                                        <v-select v-model="apartNum"
                                            :items="Array.from({ length: 13 }, (v, i) => i + 1)"
                                            :error-messages="v$.apartNum.$errors.map(e => e.$message)"
                                            label="Ze ktereho jste bytu? " required @change="v$.apartNum.$touch"
                                            @blur="v$.apartNum.$touch" variant="outlined">
                                        </v-select>

                                        <v-checkbox v-model="vlastnik"
                                            :error-messages="v$.vlastnik.$errors.map(e => e.$message)"
                                            label="Jste vlastnik bytu??" @change="v$.vlastnik.$touch"
                                            @blur="v$.vlastnik.$touch">
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
                        <v-btn v-if="step > 1" variant="text" @click="step--">
                            {{$t('components.btnBack')}}
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn v-if="step < 4" color="primary" variant="flat" :loading="loading" @click="nextStep(step)"
                            :disabled="this.v$.email.$error">
                            {{$t('components.btnNext')}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import { useVuelidate } from '@vuelidate/core'
import { required, numeric, email } from '@vuelidate/validators'
import {useI18n} from 'vue-i18n'
import UserDataService from '../services/UserDataService'

export default {
    setup () { 
        const v$ =useVuelidate()
        const { t } = useI18n()
        return { v$ , t } 
    },
    data: () => ({

        step: 1,
        loading: false,
        email: '',
        password: "",
        firstName: "",
        lastName: "",
        apartNum: null,
        telefon: "",
        vlastnik: false,
        items: Array.from({ length: 13 }, (v, i) => i + 1),
        _passwordVisible: false
    }),
    validations() {
        return {
            email: { required, email },
            password: { required },
            firstName: { required },
            lastName: { required },
            apartNum: { required, numeric },
            telefon: { required, numeric },
            vlastnik: { required },
        }
    },
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1: return 'New user registration'
                case 2: return 'Create a password'
                case 3: return 'Enter your data'
                default: return 'Account created'
            }
        },
    },
    methods: {
        nextStep: function () {
            this.loading = true;
            UserDataService.getEmail({email:this.email})
            .then( res => {
                this.loading = false
                this.step++
            }).catch(e => {
                this.loading = false
                console.log(e);
            });
        }
    },
    mounted() {
        console.log('mount')
    }
}
</script>


<style scope></style>