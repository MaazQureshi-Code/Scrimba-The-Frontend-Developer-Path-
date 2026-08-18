const array = JSON.parse(localStorage.getItem("watchlist")) || [];


async function searchCall(movieId) {

    try {

        const res = await fetch(
            `https://www.omdbapi.com/?apikey=3beba070&i=${movieId}`
        );

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();

        if (data.Response === "False") {
            return;
        }

        return data;

    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}



async function getWatchlistMovies() {

    const movies = [];

    for (const movieId of array) {

        const movie = await searchCall(movieId);

        if (movie) {
            movies.push(movie);
        }
    }

    render(movies);
}



function render(data) {

    const render_Data = data.map(function(item) {

        return `
            <div class="movie-card">

                <img 
                    class="movie-poster"
                    src="${item.Poster}"
                    alt="Poster of ${item.Title}"
                >

                <div class="movie-info">

                    <div class="movie-title-row">

                        <h2>${item.Title}</h2>

                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <span>Year ${item.Year}</span>
                        </div>

                    </div>

                    <div class="movie-details">

                        <span>${item.Type}</span>

                        <button 
                            class="watchlist-btn" 
                            data-id="${item.imdbID}"
                        >
                            <i class="fa-solid fa-circle-minus"></i>
                            Remove
                        </button>

                    </div>

                </div>

            </div>
        `;

    }).join("");


    document.querySelector(".movie-container").innerHTML = render_Data;
}



getWatchlistMovies();