import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: '',
      },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'labels',
      data: [1000, 3000, 8000, 6333, 900, 8800, 3020, 230, 4000, 2455, 1000, 8547],
      backgroundColor: '#1E81C4',
      hoverBackgroundColor: "#515151",
      hoverBorderColor: "#515151",
    },
  ],
};

const MonthsChart = () => {
  return <Bar options={options} data={data} />
}

export default MonthsChart
