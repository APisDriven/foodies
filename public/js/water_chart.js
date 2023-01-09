//SETUP BLOCK
const dataBlock = {
datasets: [{
    label: 'Calories',
    data: [
        { x: '2023-01-08', y:'100' },
        { x: '2023-01-09', y:'200' },
        { x: '2023-01-10', y:'300' },
        { x: '2023-01-11', y:'400' },
        { x: '2023-01-12', y:'500' },
        { x: '2023-01-13', y:'600' },
        { x: '2023-01-14', y:'700' }
    ],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]
};

//CONFIG BLOCK
const config = {
type: 'line',
    data,
    options: {
        scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day'
              }

            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// RENDER / INIT BLOCK

const foodChart = new Chart(
    document.getElementById('foodChart'),
    config  
);
const chart = document.getElementById('foodChart').getContext('2d');
const myChart = new Chart(chart, {
    
});