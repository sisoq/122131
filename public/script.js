let highestDownloadSpeed = 0;
let lowestDownloadSpeed = Infinity;
let highestUploadSpeed = 0;
let lowestUploadSpeed = Infinity;
let intervalId = null;
let autoStopTimeoutId = null; // إضافة متغير لوقت الإيقاف التلقائي

const ctx = document.getElementById('speedChart').getContext('2d');
const speedChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: [],
      datasets: [
          {
              label: 'Download Speed (Mbps)',
              data: [],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
              fill: true
          },
          {
              label: 'Upload Speed (Mbps)',
              data: [],
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderWidth: 2,
              fill: true
          }
      ]
  },
  options: {
      scales: {
          x: {
              type: 'time',
              time: {
                  unit: 'second',
                  tooltipFormat: 'HH:mm:ss',
                  displayFormats: {
                      second: 'HH:mm:ss'
                  }
              },
              title: {
                  display: true,
                  text: 'Time'
              }
          },
          y: {
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Speed (Mbps)'
              }
          }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              labels: {
                  color: '#000000' // تغيير لون النصوص في الأسطورة إلى الأسود
              }
          }
      }
  }
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('stop-button').style.display = 'block';

    intervalId = setInterval(() => {
        const currentTime = new Date();
        const downloadSpeed = Math.random() * 100; // Generate a random speed for demo
        const uploadSpeed = Math.random() * 50; // Generate a random speed for demo

        updateStats(downloadSpeed, uploadSpeed);
        updateChart(currentTime, downloadSpeed, uploadSpeed);
    }, 5000); // Update every 5 seconds

    // Set timeout for automatic stop after 5 minutes (300000 milliseconds)
    autoStopTimeoutId = setTimeout(() => {
        document.getElementById('stop-button').click();
    }, 300000); // 5 minutes
});

document.getElementById('stop-button').addEventListener('click', function() {
    document.getElementById('stop-button').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';

    clearInterval(intervalId);
    clearTimeout(autoStopTimeoutId); // Clear the automatic stop timeout
});

document.getElementById('download-button').addEventListener('click', function() {
    // Get the image data URL
    const imageURL = speedChart.toBase64Image();

    // Create a link element and set the href to the image data URL
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'speed-chart.png'; // Set the default filename for the download
    link.click();
});

function updateStats(downloadSpeed, uploadSpeed) {
    if (downloadSpeed > highestDownloadSpeed) {
        highestDownloadSpeed = downloadSpeed;
        document.getElementById('highest-download').innerText = highestDownloadSpeed.toFixed(2);
    }
    if (downloadSpeed < lowestDownloadSpeed) {
        lowestDownloadSpeed = downloadSpeed;
        document.getElementById('lowest-download').innerText = lowestDownloadSpeed.toFixed(2);
    }
    if (uploadSpeed > highestUploadSpeed) {
        highestUploadSpeed = uploadSpeed;
        document.getElementById('highest-upload').innerText = highestUploadSpeed.toFixed(2);
    }
    if (uploadSpeed < lowestUploadSpeed) {
        lowestUploadSpeed = uploadSpeed;
        document.getElementById('lowest-upload').innerText = lowestUploadSpeed.toFixed(2);
    }
}

function updateChart(time, downloadSpeed, uploadSpeed) {
    speedChart.data.labels.push(time);
    speedChart.data.datasets[0].data.push(downloadSpeed);
    speedChart.data.datasets[1].data.push(uploadSpeed);
    speedChart.update();
}
