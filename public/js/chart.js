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
  console.log(response)
  return response;
}



fetchAsync().then(data=>{
    // console.log(keyValues)
    // const time_labels = Object.values(keyValues.slice(1).map(element => element[0])),
    // calories = Object.values(keyValues[0]),
    // calories_datasets = [],

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
// for (let i = 1; i < calories.length + 1; i++) {
//     calories_datasets.push({
//         label: calories[i - 1],
//         data: Object.values(keyValues.slice(1, 7).map(element => element[i])),
//         backgroundColor: bg[i - 1],
//         borderColor: bc[i - 1]
//     })
// } 

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };

//   const myChart = new Chart(
//     document.getElementById('myChart'),

    const myNewChart = new Chart(document.getElementById('foodChart'), {
        type: 'line',
        // data: {
        //     datasets: calories_datasets,
        //     labels: time_labels
        // },
        // data: {
        //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //     datasets: [{
        //       label: '# of Votes',
        //       data: [12, 19, 3, 5, 2, 3],
        //       borderWidth: 1
        //     }]
        //   },

        data: {
            datasets: [{ data: data }]
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
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: "Calories",
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: true
                }
            }
        }
    })
})
