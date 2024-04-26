
const form = document.querySelector("form");
const name = document.getElementById("name");
const license = document.getElementById("license");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(name.value != "") {
        para.textContent =`${name}`;
    } 
    else if (license.value != ""){
        para.textContent = `${license}`;
    }
    else {
    para.textContent = "You need to enter something into a box.";
    }
});