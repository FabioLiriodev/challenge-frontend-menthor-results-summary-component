let scores = [];

const endPointApi = 'https://fabioliriodev.github.io/challenge-frontend-menthor-results-summary-component/statusdata.json';

document.addEventListener('DOMContentLoaded', () => {
    const elementToShowData = document.getElementById('data');

    if (!elementToShowData) {
        console.error('Elemento com o ID "data" não foi encontrado no DOM.');
        return;
    }

    async function getDataFromApi() {
        try {
            const res = await fetch(endPointApi);
            scores = await res.json();
            console.table(scores);
            showDataOnScreen(scores);
        } catch (error) {
            console.error('Erro ao buscar os dados da API:', error);
        }
    }

    function showDataOnScreen(dataList) {
        elementToShowData.innerHTML = ''; 
        dataList.forEach(score => {
            elementToShowData.innerHTML += `<div class="summary__item">
                <div class="summary__item__info">
                    <div class="item__info__description" id="info">
                        <img src="${score.icon}" alt="${score.category} icon">
                        <h3 class="description__title" id="">${score.category}</h3>
                    </div>
                    <p class="description__text"><strong>${score.score}</strong> / 100</p>
                </div>
            </div>`;
        });
    }

    getDataFromApi();
});