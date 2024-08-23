<template>
  <div>
    <v-container>
        <v-sheet :elevation="14" border="md"
    class="pa-6  mx-auto"
    
   
  >
      <v-card
        max-width="750px"
        variant="outlined"
        title="Spotreba elektropoudu CEZ , 2024"
      >
        <template v-slot:text>
          <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
        </template>
        <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData"  /> -->
        <v-card-actions>
          <v-btn> Pridat + </v-btn>
        </v-card-actions>
      </v-card>
      

      <v-card max-width="85%" variant="outlined">
        Apartman Services
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
      </v-card>
      <v-card max-width="85%" variant="outlined">
        Apartman chartDataAtZero = {{ chartDataAtZero }}
      </v-card>

      </v-sheet>
    </v-container>
  </div>
</template>


<script>
import db from "../pomucky"
 
import "chart.js/auto";
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

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
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "Duben",
          "Kveten",
          "Cerven",
          "Cervenec",
          "Zari",
          "Rijen",
          "Listopad",
          "Prosinec",
        ],
        datasets: [
          {
            data:  db.user.spotreba.cez.NT,
            label: "Nizky tarif",
            fill: false,
            tension: 0.4,
            borderColor: "red",
            backgroundColor: "orange",
            yAxisID: "y",
          },
          {
            label: "Vysoky tarif ",
            data: db.user.spotreba.cez.VT,
            borderColor: "blue",
            backgroundColor: "green",
            position: "right",
            yAxisID: "y1",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            type: "linear",
            position: "left",
          },
          y1: {
            type: "linear",
            position: "right",
          },
        },
        plugins: {
          legend: {
            title: {
              display: true,
              text: "Spotreba kW / h",
              position: "end",
            },
          },
          align: "start",
        },
        tooltip: true,
      },
    };
  },
  mounted() {},
};
</script>