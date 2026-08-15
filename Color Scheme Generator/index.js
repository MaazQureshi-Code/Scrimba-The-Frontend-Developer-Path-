const color = document.getElementById("color");
const select_Color_Scheme = document.getElementById("chose-color");
function render(array) {
    const main = document.querySelector("main");
    main.innerHTML = array.map(item => {
        return `<div class="color-box" style="background-color: ${item};">
                    <p>${item}</p>
                </div>`;
    }).join("");
}
function sendRequest() {
    const x = color.value;
    const y = select_Color_Scheme.value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${x.slice(1)}&mode=${y}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors.map(color => color.hex.value);
            render(colors);
        });
}
document.querySelector("button").addEventListener("click", sendRequest);