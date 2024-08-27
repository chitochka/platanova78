<template>
    <div>
        <v-sheet>
            <!-- <div>
                <img src="../../public/img/house_plan_0.jpg"/>
                <img src="../../public/img/house_plan_1.jpg"/>
                <img src="../../public/img/house_plan_2.jpg"/>
            </div> -->
            <v-carousel >
                <v-carousel-item
                     src="../../public/img/house_plan_0.jpg"                  
                ></v-carousel-item>
                <v-carousel-item
                     src="../../public/img/house_plan_1.jpg"                 
                ></v-carousel-item>
                <v-carousel-item
                  src="../../public/img/house_plan_2.jpg"                 
                ></v-carousel-item>
                </v-carousel>
        </v-sheet> 
    </div>
</template>

<script >

import { useI18n } from 'vue-i18n'


export default {
    setup(){
        const {t} = useI18n() 
        return {t}
    },
}

</script>

<style scoped>
.v-carousel {
    height: 100%;
    max-height: 950px;

}
</style>