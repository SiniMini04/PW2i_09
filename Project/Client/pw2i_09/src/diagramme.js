import React from 'react';
import Chart from "chart.js/auto";
import { Line, Pie } from 'react-chartjs-2';


//Chart.register(CategoryScale);

const Diagramme = () => {
   
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [3, 2, 2, 1, 5, 4],
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
        <>
        <div>
            <h2>Statistik:</h2>
            <Pie data={data} options={options} />
            
        </div>
        </>
    );
}

export default Diagramme;
