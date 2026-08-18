const btn = document.querySelector(".btn");
const userInput = document.querySelector("#userInput");
const errorMessage = document.querySelector("#error-message");
// Show error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add("show");
}


// Hide error
function hideError() {
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");
}

function WatchlistID(){

}

async function searchCall(movieName) {
    try {
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=3beba070&s=${encodeURIComponent(movieName)}`
        );

        // Check HTTP status
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        // Check OMDb response
        if (data.Response === "False") {
            document.querySelector(".movie-container").innerHTML = ""
            showError("Movie not found.");
            return;
        }
        return data.Search;
    } catch (error) {
        showError("Something went wrong. Please try again.");
    }
}


btn.addEventListener("click", async function(e) {
    e.preventDefault();

    const user = userInput.value.trim();


    // Empty input
    if (user === "") {
        showError("Please enter a movie name.");
        return;
    }


    // Check if input contains numbers
    if (/\d/.test(user)) {
        showError("Numbers are not allowed.");
        return;
    }


    // Check if input contains symbols
    if (/[^a-zA-Z\s]/.test(user)) {
        showError("Symbols are not allowed.");
        return;
    }


    // Everything is okay
    hideError();


    // Wait for movie data
    const data = await searchCall(user);


    // Only render if data exists
    if (data) {
        document.querySelector(".explore").style.display = "none"
        render(data);
    }
});

watchlistBtn.forEach(function(btn){
    btn.addEventListener("click",function(e) {
        console.log(e.target)
        
    })
})

function render(data) {

    const render_Data = data.map(item => {

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
                        <button class="watchlist-btn" data-id="${item.imdbID}">
                            <i class="fa-solid fa-circle-plus"></i>
                            Watchlist
                        </button>

                    </div>

                </div>

            </div>
        `;

    }).join("");


    document.querySelector(".movie-container").innerHTML = render_Data;

     // Buttons exist NOW, so we can select them
    const watchlistBtns = document.querySelectorAll(".watchlist-btn");

    watchlistBtns.forEach(function(btn) {

        btn.addEventListener("click", function(e) {
            const movieId = e.currentTarget.dataset.id;
            const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

            if(!watchlist.includes(movieId)){
                watchlist.push(movieId)
                localStorage.setItem(
                "watchlist",
                JSON.stringify(watchlist)
            );
            }

        });
    }
    
    )}
