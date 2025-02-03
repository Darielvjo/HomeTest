let chartInstance = null;

function renderChart(data) {
    let ctx = document.getElementById("chart").getContext("2d");

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["AFP", "SFS", "ISR", "Salario Neto"],
            datasets: [{
                data: [data.afp, data.sfs, data.isr, data.neto],
                backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FFC300"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
