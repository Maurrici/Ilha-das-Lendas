import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function LineChart(props) {
    const data = {
      labels: props.values.map((item, index) => index + 1),
      datasets: [
        {
          label: false,
          backgroundColor: '#593ef079',
          borderWidth: 5,
          borderColor: '#593ef0',
          pointBorderWidth: 8,
          pointBorderColor: '#593ef0',
          pointBackgroundColor: '#593ef0',
          data: props.values,
          fill: true
        }
      ]
    };
  
    const options = {
      plugins:{
        legend:{
          display: false
        }
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 100,
          grid:{
            color: '#ffffff50',
            lineWidth: 2,
          },
          pointLabels:{
            color: '#fff',
            font: {
              size: 18,
              family: 'Aldo'
            }
          },
          ticks:{
            stepSize: 20,
            color: 'rgb(93, 92, 92)',
            showLabelBackdrop: false,
            font: {
              size: 25,
              family: 'Aldo'
            }
          }
        },
        x:{
          grid:{
            color: '#ffffff50',
            lineWidth: 2,
          },
          ticks:{
            font: {
                size: 25,
                family: 'Aldo'
            }
          }
        }
      }
    };
  
    return (
      <Line data={data} options={options} />
    );
}

export default LineChart;