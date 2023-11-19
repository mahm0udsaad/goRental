import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // Check if a chart instance exists, and if so, destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
    <>
    <div className="w-5/6 h-60">
    <h1 className='text-lg'>Revenues</h1>
        <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
    </div>
    </>
  );
};

export const Doughnut = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      if (chartRef && chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        // Check if a chart instance exists, and if so, destroy it
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data : {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
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
    }, []);
  
    return (
      <>
      <div className=" h-60">
          <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
      </div>
      </>
    );
  };

  export const LineChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      if (chartRef && chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        // Check if a chart instance exists, and if so, destroy it
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data : {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
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
      <>
      <div className="w-[35%] h-auto mt-8">
      <h1 className='text-lg'>Orders</h1>
          <canvas ref={chartRef} id="myChart" width="200" height="100"></canvas>
      </div>
      </>
    );
  };
  