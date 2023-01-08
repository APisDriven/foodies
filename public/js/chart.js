
// const foodChart = document.getElementById('foodChart');
const dummyData = [{
    x: '2021-11-06 ',
    y: 50
}, {
    x: '2021-11-07 ',
    y: 60
}, {
    x: '2021-11-08 ',
    y: 20
}]

//API call
const fetchAsync = async()=>{
    console.log('sending request')
  const response = await fetch('/api/foodEntries/calories_last_week', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}


fetchAsync().then(data => {
    var formattedData = data.map(e => {
        return {
            x: e.date,
            y: e.totalCalories
        }
    })

    bg = [
        'rgba(27, 158, 119, 0.5)',
        'rgba(217, 95, 2, 0.5)',
        'rgba(117, 112, 179, 0.5)',
        'rgba(231, 41, 138, 0.5)',
        'rgba(102, 166, 30, 0.5)',
        'rgba(230, 171, 2, 0.5)',
        'rgba(166, 118, 29, 0.5)',
        'rgba(102, 102, 102, 0.5)'
    ],
    bc = [
        'rgb(27, 158, 119)',
        'rgb(217, 95, 2)',
        'rgb(117, 112, 179)',
        'rgb(231, 41, 138)',
        'rgb(102, 166, 30)',
        'rgb(230, 171, 2)',
        'rgb(166, 118, 29)',
        'rgb(102, 102, 102)'
    ]

    const myNewChart = new Chart(document.getElementById('foodChart'), {
        type: 'line',

        data: {
            datasets: [{ data: formattedData }]
          },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Calories Intake'
                    },
                    min: 0
                },
                responsive: true,
                maintainAspectRatio: false
            },
            plugins: {
                title: {
                    display: true,
                    text: "Calories",
                    font: {
                        size: 16
                    }
                },
            }
        }
    })
})
