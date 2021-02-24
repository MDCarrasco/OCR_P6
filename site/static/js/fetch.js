document.addEventListener("DOMContentLoaded", function(event) {
    fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score")
        .then(response => response.json())
        .then(function (response) {
            const movieSection = document.getElementById('movie-section')

            movieSection.innerHTML = `
                <div class="movie__container__img">
                    <img class="movie__img" src=${response.results[0].image_url} alt="bestmovie"/>
                </div>
                <div class="movie__info">
                    <p class="movie__info__title">${response.results[0].title}</p>
                    <p class="movie__info__genre">${response.results[0].genres}</p>
                    <p class="movie__info__plot">${response.plot}</p>
                    <div class="movie__info__container">
                        <div class="movie__info__btn__play">
                            <div class="movie__info__btn__play__triangle">
                            </div>
                            <p>Play</p>
                        </div>
                        <div class="movie__info__btn__info">
                            <p id=${response.results[0].id}>More Info</p>
                        </div>
                    </div>
                </div>
            `
            return response
        })
        .catch(error => alert("Erreur : " + error));
    var count = 0
    fetch("http://127.0.0.1:8000/api/v1/genres/")
        .then(response => response.json())
        .then(response => count = response.count)
        .catch(error => alert("Erreur : " + error));
    var base = "http://127.0.0.1:8000/api/v1/titles/?min_year=2000"
    var genre = "&genre="
    var sort = "&sort_by=-imdb_score"
    var page = "&page="
    /* TODO */
    for (let i = 0; i < count; i++) {
        fetch(base + genre + String(count) + sort + page + String(count))
            .then(response => response.json())
            .then(function (response) {
                alert(JSON.stringify(response))
            })
            .catch(error => alert("Erreur : " + error));
    }
});
