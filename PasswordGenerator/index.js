const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passwordLength = 12;
const generate1 = document.getElementById("generated-password1");
const generate2 = document.getElementById("generated-password2");
const generateBtn = document.getElementById("generator");
let password1 = "";
let password2 = "";

function generatePassword() {

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex1 = Math.floor(Math.random() * characters.length);
        const randomIndex2 = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex1];
        password2 += characters[randomIndex2];
    }
}





generateBtn.addEventListener("click", () => {
    generatePassword();
    generate1.textContent = password1;
    generate2.textContent = password2;

    password1 = " "
    password2 = " "
});




