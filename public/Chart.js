// const speedChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//       labels: [],
//       datasets: [
//           {
//               label: 'Download Speed (Mbps)',
//               data: [],
//               borderColor: 'rgba(75, 192, 192, 1)',
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//               borderWidth: 2,
//               fill: true
//           },
//           {
//               label: 'Upload Speed (Mbps)',
//               data: [],
//               borderColor: 'rgba(153, 102, 255, 1)',
//               backgroundColor: 'rgba(153, 102, 255, 0.2)',
//               borderWidth: 2,
//               fill: true
//           }
//       ]
//   },
//   options: {
//       scales: {
//           x: {
//               type: 'time',
//               time: {
//                   unit: 'second',
//                   tooltipFormat: 'HH:mm:ss',
//                   displayFormats: {
//                       second: 'HH:mm:ss'
//                   }
//               },
//               title: {
//                   display: true,
//                   text: 'Time'
//               }
//           },
//           y: {
//               beginAtZero: true,
//               title: {
//                   display: true,
//                   text: 'Speed (Mbps)'
//               }
//           }
//       },
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//           legend: {
//               labels: {
//                   color: '#000000'
//               }
//           }
//       }
//   }
// });
