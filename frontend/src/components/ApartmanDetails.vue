<template>
  <div>
    <v-sheet :elevation="14"  max-width="1200"
    class="pa-6 mx-auto"  >
    <v-row align="center" >
    <v-col  v-if="myList" @click="myList=!myList">
      <v-card   max-width="500" variant="">
        <v-container  >
          <h3> Zakladni informace</h3>
          <v-row align="start" no-gutters v-for="(value, key) in e1" :key="key">
            <v-col  cols="9">
              {{ key }}
            </v-col>
            <v-spacer ></v-spacer>
            <v-col  cols="2">
              {{ value }}  {{ typeof(value)==='number'? 'm2':'' }}
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>

  <v-col v-else @click="myList=!myList">
      <v-card   max-width="500">
        <v-list disabled>
          <v-list-subheader> Základní informace </v-list-subheader>

          <v-list-item v-for="(val, key) in e1" :key="key">
            <template v-slot:append> {{ val }} {{ Number.isFinite(val)?'m2':'' }}</template>
            <v-list-item-title v-text="key"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <v-col>
      <v-card   max-width="100%">
        <v-img src="../../public/img/IA13.jpg" ></v-img>
      </v-card>


    </v-col>
  </v-row>
  </v-sheet>
  </div>
</template>







<script>

const e1 = {
  nazevBytu: "EI-01",
  typBytu: "2+kk",
  obyvak: "20.6",
  pokoje1: 12.1,
  koupelna: 5.4,
  wc: 1.7,
  chodba: 11.3,
  vymeraCelkem: "51.1",
  predzahradka: "48",
  orientace: ["z"],
};

export default {
  data() {
    return {
      myList : true,
      e1: e1,
    };
  },
  mounted(){
  }
};
</script>

<style scoped>
.v-row {
  border: 1px solid rgb(8, 8, 8);
  padding: 10px;
}
.v-col {
  padding: 5px;
}
</style>