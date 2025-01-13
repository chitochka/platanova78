<template>
  <div>
    <!-- <v-container> -->
        <v-sheet :elevation="14"      class="pa-6  mx-auto"  >

    <v-row no-gutters><v-col> Spotreba v roce 2024 </v-col></v-row>
  <v-row no-gutters>
      <v-col class="v-col-sm-12 v-col-md-12 v-col-lg-12"> 
        <v-card        max-width=""        variant="outlined"        title="Spotreba elektropoudu CEZ , 2024"      >
          <template v-slot:text>
            <Line id="my-chart-id" :options="cez.chartOptions" :data="cez.chartData" />
          </template>

        </v-card>
      </v-col>
 <!--       <v-col class="v-col-sm-12 v-col-md-12 v-col-lg-6"> 
        <v-card max-width="" variant="outlined" title="Spotreba po mesicich">
           <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </v-card>
   </v-col> -->  
    </v-row>

    <v-row no-gutters>      <v-col>    </v-col>      </v-row>
    

<!-- VODA -->

    <v-row>
      <v-col>   
        <v-card        max-width=""        variant="outlined"        title="Spotreba VODA 2024"      >
          <template v-slot:text>
            <Line id="my-chart-id2" :options="voda.chartOptions" :data="voda.chartData"  />
          </template><hr/>
          <br/>  
                    <v-card-actions>
          <v-btn @click="dialog = !dialog" class="btnAdd"> Pridat + </v-btn>
            <v-date-input label="Zadejte datum"  prepend-icon="" prepend-inner-icon="$calendar"
            variant="outlined" class="add" ></v-date-input>
            <v-text-field  label="Stav " variant="outlined" class="add"> </v-text-field>
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

import moment from "moment"
moment.locale ='ru'
import 'chartjs-adapter-moment'
import grafy from './chartConfig.js'
import UserDataService from '../services/UserDataService'

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
      voda:grafy.makeChart([{
          label:'Voda m3', data:db.user.spotreba.voda} ]),
      cez:grafy.makeChart([       
        { label:'Vysoky Tarif', data:db.user.spotreba.cez.VT},
        { label:'Nizky Tarif',data:db.user.spotreba.cez.NT }
      ]),
  
      tvralyPobyt:db.user.tvralyPobyt,
      
    };
  },
  mounted() {
    window.vv = this
    if (!localStorage.user) return
    const data = localStorage.user
    UserDataService.getCEZ({
				_id: data.id
			})
				.then((res, req) => {
					alert(res.data[0])
				})
				.catch(e => {
					console.log(" get User Data ERROR = ", e);
				})
				.finally(() => {});
    
    
  },
};
</script>

<style scoped>
.add{
  width: 40%;
  margin: 0 10px;
   display: inline-block;
}

.btnAdd{
   border: 1px solid rgb(0, 0, 196);
   color:blue;
    font-size: 120%;
    margin-bottom: 25px;
}
</style>