document.addEventListener("DOMContentLoaded", function(event) {
    fetch("http://127.0.0.1:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
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
});
