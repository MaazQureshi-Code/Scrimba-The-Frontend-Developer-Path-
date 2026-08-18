const btn = document.querySelector(".btn")
const userInput = document.querySelector("#userInput");
const errorMessage = document.querySelector("#error-message");



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


btn.addEventListener("click", function(e){
    // Trim remove from the beginning and ending of the space trim
    const user = userInput.value.trim()
    if(user === ""){
         errorMessage.textContent = "Please enter a movie name.";
        return;
    }
// we check if it has a digit
    if(/\d/.test(user)){
        errorMessage.textContent = "Numbers are not allowed.";
        // we stop here dont run the rest of this function
        return;
    }
    if(/[^a-zA-Z\s]/.test(user)){ 
        errorMessage.textContent = "Symbols are not allowed.";
        return;
    }
// we change it two two array then map function
    const capitalized = user.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })


    errorMessage.textContent = "";


})