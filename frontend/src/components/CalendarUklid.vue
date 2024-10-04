<template>
	<div >
		<!-- <v-sheet elevation="6" class="wrap">
			<v-tabs v-model="model"            bg-color="indigo" show-arrows        next-icon="mdi-arrow-right-bold-box-outline"        :prev-icon=this.next()      >
			<v-tab v-for="i in 10" :key="i" :text="`Item ${i}`"         elevation="4"          >
			<v-card  variant="tonal">
				<v-card-subtitle> {{moment(today).weekday(-6+ (7*i) ).format('DD.MM.') }} - 
					{{moment(today).weekday(0 + (7*i)).format('DD.MM.') }} 
				</v-card-subtitle>
				<v-card-text> Byt {{ i+1 % 6 }} <hr/>
					Byt {{ 7+(i%7) }} </v-card-text>
				<v-card-text> Byt {{ 14+(i%4) }} </v-card-text>
				<v-card-actions>
					<v-btn>					Button				</v-btn>
				</v-card-actions>
			</v-card>
			</v-tab>
			</v-tabs>
		</v-sheet> -->

		<div class="ccc">
		<v-sheet class="mx-auto" elevation="8" max-width="80%">
			<div>	
				<v-toolbar        dark prominent  >
					<v-app-bar-nav-icon></v-app-bar-nav-icon> <v-toolbar-title>úklid společných prostor</v-toolbar-title>
				
					<v-switch  color="success" label="Jen Moje patro" v-model="onlyMyFloor"></v-switch>
					<v-spacer></v-spacer>
				</v-toolbar>
			</div>
			<div style="positon:relative">
				<v-card class="labelcard py-1 m" >
					<v-card-title >Datum</v-card-title><v-divider :thickness="4"></v-divider>
						<v-card-text v-if="onlyMyFloor"> Prizemi</v-card-text> <v-card-text> Patro 1</v-card-text>
						<v-card-text v-if="onlyMyFloor"> Patro 2</v-card-text>
				</v-card>

				<v-slide-group v-model="model" class="pa-1" selected-class="bg-success" show-arrows >
				<v-slide-group-item v-for="n in 15"  :key="n" v-slot="{ isSelected, toggle, selectedClass }"         >
					<v-card :class="['mx-1', selectedClass]" color="white-lighten-1"              height=""     class="cc1"          @click="toggle"            >
						<v-card-title >29.<small>09.</small> - 06.<small>10.</small></v-card-title>
						<v-divider :thickness="4"></v-divider>
						<v-card-text v-if="onlyMyFloor"> Alex Prizemi</v-card-text>
						<v-card-text> Первый Этаж </v-card-text>
						<v-card-text v-if="onlyMyFloor"> Druhe Patro</v-card-text>
						<div class="d-flex fill-height align-center justify-center"> 					<v-icon v-if="isSelected" color="red"                icon="mdi-close-circle-outline"                size="48"              ></v-icon>				</div>
					</v-card>
				</v-slide-group-item>
			</v-slide-group>
			</div>
		</v-sheet>
		{{ this.onlyMyFloor }}
    </div>
	</div>

</template>






<script>
import moment from 'moment';


var seznam = [[],[],[]]
for (let i=1; i<7 ;i++) seznam[0].push('byt '+ i )
for (let i=7; i<13 ;i++) seznam[1].push('byt '+ i )
for (let i=13; i<16 ;i++) seznam[2].push('byt '+ i )

export default {
  data() {
    return {
		onlyMyFloor:true,
		isVisibleFloor :{
			0:true,1:true,2:true
		},
      model:[],
      moment:moment,
      today:new Date()
    }
  },
  methods: {
    next:function(){
        console.log('dsf')
        return "mdi-arrow-left-bold-box-outline"
    }
  },
  mounted(){
    window.vv = this
    window.mm = moment
    console.log(this.today)
  }
}
</script>


<style scoped>
.list{
  /* padding: 5px; */
  border:1px solid green
}

.wrap {
  width: 80%;
  margin: 10%;;
  height: 300px;
}

.v-tabs { 
  height:100%;
  border: 1px solid #fc5103;

 }
.v-tab {
  height:100%;
  border: 1px solid red;
  /* padding: ; */
}
.cc1 {
      background: rgb(233, 233, 233);
		border: 1px dotted rgb(255, 154, 154);
		/* left:50px */
    }
.ccc >* {
      /* background: grey; */
		border: 1px solid red;
    }
.ccc >* > *>* {
      /* background: grey; */
		border: 1px solid blue;
    }

.v-card-text{
	border: 1px solid darkgray;
}

.labelcard{

	border: 1px solid orangered;
	position: relative;
	float: left;
	top: 0%;
	left: 0%;
	/* bottom: 0; */
	font-size: 75% !important;
	width: 115px;
	background-color: rgb(201, 201, 201);


}

.v-slide-group__prev,
.v-slide-group__next {
	background-color: rgba(0,155,0,0.2) !important;	
}

.v-slide-group__prev:hover,
.v-slide-group__next:hover {
	background-color: rgba(0,155,0,0.8) !important;	
}

</style>