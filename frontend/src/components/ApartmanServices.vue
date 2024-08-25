<template>
  <div>
    <!-- <v-container> -->
        <v-sheet :elevation="14"      class="pa-6  mx-auto"  >

    <v-row no-gutters><v-col> Spotreba v roce 2024 </v-col></v-row>
    <v-row no-gutters>
      <v-col class="v-col-sm-12 v-col-md-12 v-col-lg-6"> 
        <v-card        max-width=""        variant="outlined"        title="Spotreba elektropoudu CEZ , 2024"      >
          <template v-slot:text>
            <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
          </template>
          <!-- <v-card-actions>
            <v-btn> Pridat + </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
      <v-col class="v-col-sm-12 v-col-md-12 v-col-lg-6"> 
        <v-card max-width="" variant="outlined" title="Spotreba po mesicich">
           <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>      <v-col>    </v-col>      </v-row>
    
    <v-row>
      <v-col>   
        <v-card        max-width=""        variant="outlined"        title="Spotreba VODA 2024"      >
          <template v-slot:text>
            <Line id="my-chart-id2" :options="chartOptions" :data="chartDataVoda" />
          </template>
                    <v-card-actions>
            <v-btn> Pridat + </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
    
    <v-row><v-col> 

    </v-col></v-row>
    
    
    <v-row>
      <v-col> 
        <v-card        max-width=""        variant="outlined"        title="Hlasene trvale Bydliste"      >
          <v-list lines="one">
            <v-list-item
              v-for="item in tvralyPobyt" :key="item" :title="item"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

      </v-sheet>
    <!-- </v-container> -->
  </div>
</template>


<script>
import db from "../pomucky.js"
 
import "chart.js/auto";
import { Bar, Line } from "vue-chartjs";
import {   Chart as ChartJS,  Title,  Tooltip,  Legend,  BarElement,  CategoryScale,  LinearScale,  PointElement,} from "chart.js";
ChartJS.register(  Title,  Tooltip,  Legend,  BarElement,  CategoryScale,  LinearScale,  PointElement);
import o from './mychart.js'



export default {
  name: "BarChart",
  components: { Bar, Line },
  setup() {},
  computed: {
    chartDataAtZero() {
      return this.chartData.datasets[0].data.map((item, i, arr) => {
        return arr[i + 1] - item; //this.chartData.datasets[0].data[0]
      });
    },
  },
  data() {
    return {
      tvralyPobyt:db.user.tvralyPobyt,
      chartDataVoda :{
        labels: o.labels,
        datasets: o.chartDataVoda,
      },
      chartData: {
        labels: o.labels,
        datasets: o.datasets,
      },
      chartOptionsVoda: o.chartOptionsVoda,
      chartOptions: o.chartOptions,
    };
  },
  mounted() {
    console.log(o)
    window.vv = this
    console.log(db.user.tvralyPobyt)
  },
};
</script>