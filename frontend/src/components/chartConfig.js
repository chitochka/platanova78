import moment from "moment"
moment.locale = 'ru'
import 'chartjs-adapter-moment'


var makeChart = function (chart) {
    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    tooltipFormat: 'MM',
                    parser: (value) => moment(value, 'YYYY-MM-DD')
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                type: "linear",
                position: "left",
                title: {
                    display: true,
                    text: 'value'
                }
            }
        },
        legend: {
            display: true
        },
        responsive: true,
    }


    const chartData = {
        labels: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01',],
        datasets: [
            {
                label: chart[0].label,
                fill: false,
                tension: 0.4,
                borderColor: "red",
                backgroundColor: "orange",
                yAxisID: "y",
                data: chart[0].data
            }
        ]
    }


    if (chart.length > 1) {
        chartOptions.scales.y1 = { ...chartOptions.scales.y, position: "right" }
        chartData.datasets.push({
            ...chartData.datasets[0],
            data: chart[1].data,
            label: chart[1].label,
            yAxisID: "y1",
            borderColor: "blue",
        })
    }

    return {
        chartOptions,
        chartData
    }

}



const grafy = {
    makeChart,

}



export default grafy