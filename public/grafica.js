const labels = ['Venados', 'Naranjeros']
const colors = ['#862029', '#bc6235'];

const graph = document.querySelector("#grafica");

const [btnVenados, btnNaranjeros] = document.querySelectorAll('.contenido-boton');

let myChart = null;

const get_data = async () => {
    const response = await fetch('/get_initial_votes');
    const dataVotos = await response.json();
    console.log(dataVotos)
    return [dataVotos.votes.team1, dataVotos.votes.team2];
}

const create_chart = async () => {
    const chart_data = await get_data();

    const data = {
        labels: labels,
        datasets: [{
            data: chart_data,
            backgroundColor: colors,
        }]
    };

    const config = {
        type: 'pie',
        data: data,
    };

     myChart = new Chart(graph, config);
}

const update_chart = async () => {
    const chart_data = await get_data();
    myChart.data = {
        labels,
        datasets: [
            {
                data: chart_data,
                backgroundColor: colors,
            }
        ]
    }
    myChart.update();
    document.querySelector('#count_1').innerHTML = chart_data[0];
    document.querySelector('#count_2').innerHTML = chart_data[1];
}

create_chart();
btnVenados.addEventListener('click', update_chart);
btnNaranjeros.addEventListener('click', update_chart);

