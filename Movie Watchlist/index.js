async function searchCall(movieName) {
    // Check if user entered anything
    if (!movieName || !movieName.trim()) {
        console.log("Please enter a movie name.");
        return;
    }
    try {
        const apikey = process.env.KEY;
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=${apikey}&s=${encodeURIComponent(movieName)}`
        );
        // Check HTTP status
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        // Check OMDb's own response
        if (data.Response === "False") {
            console.log("Movie not found.");
            return;
        }
        console.log(data.Search);
    } catch (error) {
        console.log("Something went wrong:", error.message);
    }
}

searchCall("Batman");