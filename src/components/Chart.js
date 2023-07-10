import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Chart configuration
    const chartConfig = {
      type: 'line', // Change to the desired chart type
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // Add your chart labels
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30], // Add your chart data
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Add desired background color
            borderColor: 'rgba(255, 99, 132, 1)', // Add desired border color
            borderWidth: 1 // Add desired border width
          }
        ]
      },
      options: {
        responsive: true // Adjust based on your requirements
      }
    };

    new Chart(ctx, chartConfig);
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
