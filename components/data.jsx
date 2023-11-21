"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { TotalSummary } from '@/data/info';

export const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const generateRandomData = () => {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [{
            label: '# of Revenues',
            data: generateRandomData(),
            backgroundColor: [
              '#E6E8EC',
              '#5A6ACF',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-5/6 h-60">
      <h1 className='text-lg'>Revenues</h1>
      <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
    </div>
  );
};
export const Doughnut = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const { TotalRevenue, TotalExpenses } = TotalSummary;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Total Revenue', 'Total Expenses'],
          datasets: [{
            label: 'My First Dataset',
            data: [TotalRevenue, TotalExpenses],
            backgroundColor: [
              '#5A6ACF',
              '#C7CEFF'
            ],
            hoverOffset: 4
          }]
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [TotalRevenue, TotalExpenses]);

  return (
    <div className="h-60 w-[40%]">
      <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
    </div>
  );
};
export const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];

      // Random data for two lines representing car rental orders
      const line1Data = [40, 55, 30, 70, 45, 60]; // Example data for Line 1
      const line2Data = [60, 45, 70, 30, 55, 40]; // Example data for Line 2

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Car Rental Orders last month',
            data: line1Data,
            fill: false,
            borderColor: '#E6E8EC',
            tension: 0.1
          }, {
            label: 'Car Rental current month',
            data: line2Data,
            fill: false,
            borderColor:  '#5A6ACF',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
      <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
  );
};
