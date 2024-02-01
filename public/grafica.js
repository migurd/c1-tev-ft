const labels = ['Venados', 'Naranjeros']
const colors = ['#862029', '#bc6235'];

const graph = document.querySelector("#grafica");

const data = {
    labels: labels,
    datasets: [{
        data: [50, 50],
        backgroundColor: colors,
    }]
};

const config = {
    type: 'pie',
    data: data,
};

new Chart(graph, config);