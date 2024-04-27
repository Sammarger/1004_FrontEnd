
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ztncxmihptraxhebbwqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bmN4bWlocHRyYXhoZWJid3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjI3NzAsImV4cCI6MjAyOTYzODc3MH0.DYV7wVkw2fUq2sVpmzTf4X2GPl1V0U6VSkJgETgWCm8'
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.querySelector("form");
const name = document.getElementById("name");
const license = document.getElementById("license");
const para = document.querySelector("p");
var tableOutput;
let matchFound = false;

/*function findNameMatch(item) {
    let matchFound = false;
    let nameString = item["Name"];
    let finalString = nameString.replace(/"/g, '');

    if(name.value === finalString) {
        para.textContent = `${name.value}`;
    }

}*/

function matchingItems(item) {
    // Split the string into an array using space as the separator
    const nameParts = item.name.split(" ");

    const stringLine = "Name: " + item.name + ", Address: " + item.address + ", DoB: " + item.DoB +
    ", License Number: "+ item.licenseNumber + ", Expiry Date: " + item.expiryDate + "<br>";

    // Use array destructuring to assign the first and last name to variables
    const [firstName, lastName] = nameParts;
    if(name.value === item.name || license.value === item.licenseNumber) {
        tableOutput = tableOutput + stringLine;
        matchFound = true;
     } else {
            if(nameParts[0] === name.value) {
                tableOutput = tableOutput + stringLine;
                matchFound = true;
            } else if(nameParts[1] === name.value){
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

async function fetchData() {
    const {data, error} = await supabase.from('People').select('');
   matchFound = false;
    tableOutput = "";

    for(const item of data){
        const person = createPerson(item)
        matchingItems(person);
    }

    if(matchFound === false) {
        tableOutput = "No result returned from that search.";
    }
    para.innerHTML = tableOutput;

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
});