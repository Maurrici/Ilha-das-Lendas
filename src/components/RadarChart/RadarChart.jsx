import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
  
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function RadarChart(props) {
    const data = {
      labels: ['Top', 'Jg', 'Sup', 'Adc', 'Mid'],
      datasets: [
        {
          label: false,
          backgroundColor: '#593ef079',
          borderWidth: 3,
          borderColor: '#593ef0',
          pointBorderWidth: 5,
          pointBorderColor: '#593ef0',
          pointBackgroundColor: '#593ef0',
          data: props.values
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
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          angleLines:{
            color: '#ffffff50'
          },
          grid:{
            color: '#ffffff50'
          },
          pointLabels:{
            color: '#fff',
            font: {
              size: 18,
              family: 'Aldo'
            }
          },
          ticks:{
            color: 'rgb(93, 92, 92)',
            showLabelBackdrop: false,
            font: {
              size: 15,
              family: 'Aldo'
            }
          }
        }
      }
    };
  
    return (
      <Radar data={data} options={options} />
    );
}

export default RadarChart;