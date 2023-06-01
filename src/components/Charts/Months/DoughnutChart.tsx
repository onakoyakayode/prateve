import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Lien', 'Available Bal'],
    datasets: [
      {
        label: '',
        data: [38, 62],
        backgroundColor: [
          '#E43424',
          '#1E81C4',
        ],
        borderColor: [
          '#E43424',
          '#1E81C4',
        ],
        borderWidth: 1,
      },
    ],
  };

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Savings',
      },
      font: {
        size: 3
      }
    },
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} className='w-[100%]'/>
}

export default DoughnutChart
