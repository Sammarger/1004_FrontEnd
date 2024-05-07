import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ztncxmihptraxhebbwqd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bmN4bWlocHRyYXhoZWJid3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjI3NzAsImV4cCI6MjAyOTYzODc3MH0.DYV7wVkw2fUq2sVpmzTf4X2GPl1V0U6VSkJgETgWCm8';
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");
const rego = document.getElementById("rego");
var results = document.getElementById("results");
var message = document.querySelector("p");
var tableOutput;


function matchingItems(item) {
    const stringLine = "Registration Number: " + item.vehicleID + ", Make: " + item.make + ", Model: " + item.model +
    ", Colour: "+ item.colour + ", Vehicle Owner: " + item.owner;

    if(rego.value === item.vehicleID) {
        tableOutput = tableOutput + stringLine;
    }
}

function getOwnerName(ownerID, peopleData) { // Goes through each person in the person table, if ownerID matches, add vehicle owner
    for(const person of peopleData) {
        let personID = JSON.stringify(person["PersonID"]).replace(/"/g, '');

        if(personID === ownerID) {
            let personName = JSON.stringify(person["Name"]).replace(/"/g, '');
            return personName;
        }
    }
}

function createVehicle(item, peopleData){ 

    const vehicle = {};
    vehicle.vehicleID = (JSON.stringify(item["VehicleID"])).replace(/"/g, '');
    vehicle.make = (JSON.stringify(item["Make"])).replace(/"/g, '');
    vehicle.model = (JSON.stringify(item["Model"])).replace(/"/g, '');
    vehicle.colour = (JSON.stringify(item["Colour"])).replace(/"/g, '');

    let ownerID = JSON.stringify(item["OwnerID"]).replace(/"/g, '')

    if(ownerID != "") { 
        vehicle.owner = getOwnerName(ownerID, peopleData);
    } else {
        vehicle.owner = 'NULL';
    } 
    return vehicle;
}

async function fetchData(table) { // Fetches the whole tanle from supabase
    const {data, error} = await supabase.from(table).select('');

    return data;
}

function searchResults() {
    if(rego.value === "") {
        message.textContent = "Error";
    } else {
        if(tableOutput === "") {
            message.textContent = "No result found";
        } else {
            message.textContent = "Search successful";
            results.innerHTML = tableOutput;

        }
    }
}

form.addEventListener("submit", async (e) => { // Event must be async as function calls for an sql table
    e.preventDefault(); // Prevents form from loading a new page

    tableOutput = ""; // Text that is to be output will be entered here,
                      // such that if there is an error, output will be blank,
                      // instead of the previous search results
    const vehicleData = await fetchData('Vehicle'); 

    const peopleData = await fetchData('People'); // People table needed to find owner name from owner id

    for(const item of vehicleData){ // For every vehicle in vehicleData, a vehicle object is created, and the owner is identified

        var vehicle = createVehicle(item, peopleData);
        matchingItems(vehicle); // Checks if there is a vehicle matching the user input
    }

    searchResults(); // Changes the output depending on the results
});
