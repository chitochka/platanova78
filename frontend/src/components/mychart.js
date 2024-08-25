import db from '../pomucky.js'


const labels= [
    "January",
    "February",
    "March",
    "Duben",
    "Kveten",
    "Cerven",
    "Cervenec",
    "Srpen",
    "Zari",
    "Rijen",
    "Listopad",
    "Prosinec",
  ]

  
const  chartOptions= {
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
  }

  
const  chartOptionsVoda= {
    responsive: true,
    scales: {
      y: {
        type: "linear",
        position: "left",
      }
    },
    plugins: {
      legend: {
        title: {
          display: true,
          text: "Spotreba Vody",
          position: "end",
        },
      },
      align: "start",
    },
    tooltip: true,
  }

const  datasets= [
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
  ]
  const chartDataVoda =       [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]

  const o ={
    labels,
    chartOptions,
    datasets,
    chartOptionsVoda,
    chartDataVoda

  }

export default o