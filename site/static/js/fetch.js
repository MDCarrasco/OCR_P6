(async () => {
    document.addEventListener("DOMContentLoaded", function(event) {

        fetch("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score")
            .then(response => response.json())
            .then(function (response) {
                const movieSection = document.getElementById('movie-section')

                movieSection.innerHTML = `
                <div class="movie__container__img">
                    <img class="movie__img" src=${response.results[0].image_url} alt="bestmovie"/>
                </div>
                <div class="movie__info" id=${response.results[0].id}>
                    <p class="movie__info__title">${response.results[0].title}</p>
                    <p class="movie__info__genre">${response.results[0].genres}</p>
                    <p class="movie__info__plot" id="best-movie-plot"></p>
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
                const carouselsSection = document.getElementById('carousels-section')
                carouselsSection.innerHTML = `
                <section class="carousel">
                    <div class="carousel__wrapper">
                        <div class="nav nav-left" id="best-nav-left">
                            <div class="chevron left"></div>
                        </div>
                        <div class="carousel__content carousel-content">
                            <h2 class="carousel__title">Best rated movies</h2>
                            <div class="carousel__items" id="best-carousel-items">

                            </div>
                        </div>
                        <div class="nav nav-right" id="best-nav-right">
                            <div class="chevron right"></div>
                        </div>
                    </div>
                </section>
            `

                const carouselItems = document.getElementById('best-carousel-items')
                response.results.forEach(function(value, index){
                    carouselItems.innerHTML += `
                        <div class="carousel__items__container slide slide-${index}">
                            <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                        </div>

                `

                })
                return fetch('http://localhost:8000/api/v1/titles/' + response.results[0].id)
            })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
                console.log(JSON.stringify(data))
                const movieInfoPlot = document.getElementById('best-movie-plot')
                movieInfoPlot.innerHTML = `
                    ${data.description}
                `
            })
            .catch(error => alert("Erreur lors du remplissage 1 du car best: " + error));
        async function fill_carousels() {
            const base = "http://127.0.0.1:8000/api/v1/titles/"
            const genre = "?genre="
            const sort = "&sort_by=-imdb_score"
            const page = "&page="
            fetch(base + genre + 'Animation' + sort)
                .then(response => response.json())
                .then(function (response) {
                    const carouselsSection = document.getElementById('carousels-section')
                    carouselsSection.innerHTML += `
                        <section class="carousel">
                            <div class="carousel__wrapper">
                                <div class="nav nav-left" id="anim-nav-left">
                                    <div class="chevron left"></div>
                                </div>
                                <div class="carousel__content carousel-content">
                                    <h2 class="carousel__title">Animation</h2>
                                    <div class="carousel__items" id="animation-carousel-items">

                                    </div>
                                </div>
                                <div class="nav nav-right" id="anim-nav-right">
                                    <div class="chevron right"></div>
                                </div>
                            </div>
                        </section>
                `
                    const carouselItems = document.getElementById('animation-carousel-items')
                    response.results.forEach(function(value, index){
                        carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                    })
                    return response
                })
                .catch(error => alert("Erreur lors du remplissage 1 du car animation: " + error));
            fetch(base + genre + 'Comedy' + sort)
                .then(response => response.json())
                .then(function (response) {
                    const carouselsSection = document.getElementById('carousels-section')
                    carouselsSection.innerHTML += `
                        <section class="carousel">
                            <div class="carousel__wrapper">
                                <div class="nav nav-left" id="comedy-nav-left">
                                    <div class="chevron left"></div>
                                </div>
                                <div class="carousel__content carousel-content">
                                    <h2 class="carousel__title">Comedy</h2>
                                    <div class="carousel__items" id="comedy-carousel-items">

                                    </div>
                                </div>
                                <div class="nav nav-right" id="comedy-nav-right">
                                    <div class="chevron right"></div>
                                </div>
                            </div>
                        </section>
                `
                    const carouselItems = document.getElementById('comedy-carousel-items')
                    response.results.forEach(function(value, index){
                        carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                    })
                    return response
                })
                .catch(error => alert("Erreur lors du remplissage 1 du car comedy: " + error));
            fetch(base + genre + 'Sport' + sort)
                .then(response => response.json())
                .then(function (response) {
                    const carouselsSection = document.getElementById('carousels-section')
                    carouselsSection.innerHTML += `
                        <section class="carousel">
                            <div class="carousel__wrapper">
                                <div class="nav nav-left" id="sport-nav-left">
                                    <div class="chevron left"></div>
                                </div>
                                <div class="carousel__content carousel-content">
                                    <h2 class="carousel__title">Sport</h2>
                                    <div class="carousel__items" id="sport-carousel-items">

                                    </div>
                                </div>
                                <div class="nav nav-right" id="sport-nav-right">
                                    <div class="chevron right"></div>
                                </div>
                            </div>
                        </section>
                `
                    const carouselItems = document.getElementById('sport-carousel-items')
                    response.results.forEach(function(value, index){
                        carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                    })
                    return response
                })
                .catch(error => alert("Erreur lors du remplissage 1 du car sport: " + error));
        }
        fill_carousels()
    });
})().catch(e => {
    // Deal with the fact the chain failed
});
