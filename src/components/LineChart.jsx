import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


    const LineChart = () => {
      const data1 = {
        labels: ['Oct 2023', 'Oct 2023', 'NOv 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [60, 80, 100, 120, 140, 180,],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: 'rgba(153,102,255,1)',
          },
        ],
      }; 
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    return (
      <div>
        <h2>Line Graph 1</h2>
        <Line 
        data={data1} 
        options={options} 

        />
      
      </div>
    );
  }


export default LineChart;
