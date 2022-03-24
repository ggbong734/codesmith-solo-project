import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

export const CalorieChart = ({ last7DaysCalories, calorieBudget }) => {

    // get last 7 dates
    function Last7Days() {
        var result = [];
        for (var i = 6; i >= 0; i--) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push(d.toDateString())
        }
        return result;
    }
    const last7days = Last7Days();

    // array to store calories from last 7 days
    const history = [null, null, null, null, null, null, null];

    // populate history array if date from SQL matches last7days
    if (last7DaysCalories.length) {
        for (let i = 0; i < 7; i++) {
            for (const [key, value] of Object.entries(last7DaysCalories)) {
                if (new Date(last7days[i]).getTime() === new Date(value.date).getTime()) {
                    history[i] = parseInt(value.sum);
                }
            }
        }
    }

    const data = {
        labels: last7days.map(date => date.slice(0, 10)),
        datasets: [
            {
                label: 'Calories',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(196,198,248,0.8)',
                borderColor: 'rgba(114,72,139,0.8)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(67, 56, 202)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(67, 56, 202)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                data: history
            },
            {
                label: 'Budget',
                fill: false,
                fillColor: '#C89D7C',
                lineTension: 0.1,
                borderColor: '#C89D7C',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#C89D7C',
                pointBackgroundColor: '#C89D7C',
                pointBorderWidth: 0,
                pointHoverRadius: 1,
                pointHoverBackgroundColor: '#C89D7C',
                pointHoverBorderColor: '#C89D7C',
                pointHoverBorderWidth: 0,
                pointRadius: 1,
                pointHitRadius: 1,
                data: Array(7).fill(calorieBudget)
            }
        ]
    };

    const options =
    {
        scales: {
            y: {
                ticks: {
                    color: 'gray',
                    font: {
                        size: 16,
                    }
                }
            },
            x: {
                ticks: {
                    color: 'gray',
                    font: {
                        size: 15
                    }
                }
            }
        },
        legend: {
            display: true,
            fullWidth: true,
            labels: {
                fontSize: 16
            }
        },
    }


    return (
        <div id="CalorieChart" className="flex flex-col bg-gray-50 rounded overflow-hidden shadow-lg mx-4 my-2 px-4 py-2">
            <div className="flex flex-row px-6 justify-center">
                <div className="font-bold text-gray-500 text-3xl mb-5">
                    HISTORY
                </div>
            </div >
            <div className='flex flex-col items-center h-96 mb-5'>
                <div className='w-3/5'>
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    )
}
