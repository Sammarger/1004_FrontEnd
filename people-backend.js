
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ztncxmihptraxhebbwqd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bmN4bWlocHRyYXhoZWJid3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjI3NzAsImV4cCI6MjAyOTYzODc3MH0.DYV7wVkw2fUq2sVpmzTf4X2GPl1V0U6VSkJgETgWCm8';
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");
const name = document.getElementById("name");
const license = document.getElementById("license");
var results = document.getElementById("results");
var message = document.querySelector("p");
var tableOutput; // Used to add all potential matches to the final results section
let matchFound;

function replaceWithLowerCase(item) { // Function only used for turning string lower case, called many times
    let lowerCaseItem = item.replace(/[A-Z]/g, (match) => match.toLowerCase());
    return lowerCaseItem;
}

function matchingItems(item) {

    var lowerCaseName =replaceWithLowerCase(name.value);
    var lowerCaseItemName = replaceWithLowerCase(item.name);

    const nameParts = lowerCaseItemName.split(" ");

    const stringLine = "<div>Name: " + item.name + ", Address: " + item.address + ", DoB: " + item.DoB +
    ", License Number: "+ item.licenseNumber + ", Expiry Date: " + item.expiryDate + "</div>";

    if(lowerCaseName === lowerCaseItemName || license.value === item.licenseNumber) {
        tableOutput = tableOutput + stringLine;
        matchFound = true;
     } else {
            if(nameParts[0] === lowerCaseName) { // First name
                tableOutput = tableOutput + stringLine;
                matchFound = true;
            } else if(nameParts[1] === lowerCaseName){ // Surname
                tableOutput = tableOutput + stringLine;
                matchFound = true;
            } 
        }

}

function createPerson(item) {
    const person = {};
    person.name = (JSON.stringify(item["Name"])).replace(/"/g, '');
    person.address = (JSON.stringify(item["Address"])).replace(/"/g, '');
    person.DoB = (JSON.stringify(item["DOB"])).replace(/"/g, '');
    person.licenseNumber = (JSON.stringify(item["LicenseNumber"])).replace(/"/g, '');
    person.expiryDate = (JSON.stringify(item["ExpiryDate"])).replace(/"/g, '');

    return person;
}

function validSearch() {
    if(name.value != "" && license.value === "") {
        return true;
    } else if(name.value === "" && license.value != ""){
        return true;
    } else {
        return false;
    }
}

async function fetchData() {
    const {data, error} = await supabase.from('People').select('');
    matchFound = false;
    tableOutput = "";

    for(const item of data){
        const person = createPerson(item);
        matchingItems(person);
    }

    if(validSearch()) {
        if(matchFound === false) {
            message.textContent = "No result found";
        } else {
            message.textContent = "Search successful";
            results.innerHTML = tableOutput;
        }
    } else {
        message.textContent = "Error";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
});