function fill(){
    fetch("http://127.0.0.1:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
        .then(response => response.json())
        .then(function (response) {
            response.results.forEach(function(value, index){
                const carouselItems = document.getElementById('best-carousel-items')
                if (index < 2) {
                    carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index + 5}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                }
            })
            return response
        })
        .catch(error => alert("Erreur lors du remplissage 2 du car best: " + error));
    async function fill_other_carousels() {
        const base = "http://127.0.0.1:8000/api/v1/titles/"
        const genre = "?genre="
        const sort = "&sort_by=-imdb_score"
        const page = "&page="
        fetch(base + genre + 'Animation' + sort + page + '2')
            .then(response => response.json())
            .then(function (response) {
                response.results.forEach(function(value, index){
                    const carouselItems = document.getElementById('animation-carousel-items')
                    if (index < 2) {
                        carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index + 5}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                    }
                })
                return response
            })
            .catch(error => alert("Erreur lors du remplissage 2 du car animation: " + error));
        fetch(base + genre + 'Comedy' + sort + page + '2')
            .then(response => response.json())
            .then(function (response) {
                response.results.forEach(function(value, index){
                    const carouselItems = document.getElementById('comedy-carousel-items')
                    if (index < 2) {
                        carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index + 5}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                    }
                })
                return response
            })
            .catch(error => alert("Erreur lors du remplissage 2 du car comedy: " + error));
        fetch(base + genre + 'Sport' + sort + page + '2')
            .then(response => response.json())
            .then(function (response) {
                response.results.forEach(function(value, index){
                    const carouselItems = document.getElementById('sport-carousel-items')
                    if (index < 2) {
                        carouselItems.innerHTML += `
                            <div class="carousel__items__container slide slide-${index + 5}">
                                <img id=${value.id}  class="carousel__items__image" src=${value.image_url} alt="movie" />
                            </div>

                    `
                    }
                })
                return response
            })
            .catch(error => alert("Erreur lors du remplissage 2 du car sport: " + error));


    }
    fill_other_carousels()
}

setTimeout(function() {
    fill(); 
}, 1000);
