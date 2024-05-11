import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ztncxmihptraxhebbwqd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bmN4bWlocHRyYXhoZWJid3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjI3NzAsImV4cCI6MjAyOTYzODc3MH0.DYV7wVkw2fUq2sVpmzTf4X2GPl1V0U6VSkJgETgWCm8';
const supabase = createClient(supabaseUrl, supabaseKey);

const channels = supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'Vehicle' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()

// Vehicle Form Inputs
const vehicleForm = document.getElementById("vehicle-form");
const rego = document.getElementById("rego");
const make = document.getElementById("make");
const model = document.getElementById("model");
const colour = document.getElementById("colour");
const owner = document.getElementById("owner");

// People Form Inputs
const peopleForm = document.getElementById("people-form");
const personID = document.getElementById("personid");
const name = document.getElementById("name");
const address = document.getElementById("address");
const dob = document.getElementById("dob");
const license = document.getElementById("license");
const expire = document.getElementById("expire");

// Other
var message = document.getElementById("message");
var errorMessage = document.getElementById("error-message");



function toString(item) {
    return JSON.stringify(item).replace(/"/g, '') //Converts table item to a string
}

// ------------ VEHICLE FORM FUNCTIONS -------------- //

async function findOwner(ownerName) {
    const {data, error} = await supabase.from('People').select(''); // Retreives whole people table from supabase

    for(const person of data) {
        let personName = toString(person["Name"]);
        if(personName === ownerName) // If the name matches the user input, return ownerID 
        {
            return toString(person["PersonID"])
        }
    }
    return 0;
}
function validVehicleFormInputs(){ // Makes sure there are no null values entered
    if(rego === "" || make === "" || model === "" || colour === ""){ 
        return false;
    } else {
        return true;
    }

}

async function addVehicle(ownerID){ // Add vehicle to table
    const { error } = await supabase.from('Vehicle')
    .insert({ VehicleID: rego.value, Make: make.value, Model: model.value, Colour: colour.value, OwnerID: ownerID});
    
    errorMessage.textContent = `${error.value}`;

}


vehicleForm.addEventListener("submit", async (e) => { // Event must be async as function calls for an sql table
    e.preventDefault(); // Prevents form from loading a new page
    var ownerID;
    if(owner.value != ""){  // If value entered is not nothing attempt to find person
        ownerID = await findOwner(owner.value);
    } else {
        ownerID = -1 // If null value entered return error
    }
    if(ownerID === 0) {
        peopleForm.style.display = "block"; 
        message.textContent = "";
    }
    else if(ownerID === -1){
        peopleForm.style.display = "none"; // Removes people form if on screen
        message.textContent = "Error"
    } else {
        peopleForm.style.display = "none"; // Removes people form if on screen
        if(validVehicleFormInputs())
        {
            await addVehicle(ownerID);
            message.textContent = `Vehicle Added Successfully`;
        } else {
            message.textContent = "Error";
        }
    }
});

// ------------ PEOPLE FORM FUNCTIONS -------------- //

function validPeopleFormInputs(){
    if(personID.value === "" || name.value === "" || address.value === "" || dob.value === "" || license.value === "" || expire.value === "" ){
        return false;
    } else {
        return true;
    }
}
async function addPerson() { // Add vehicle to table
    const { error } = await supabase.from('People')
    .insert({ PersonID: personID.value, Name: name.value, Address: address.value, DOB: dob.value, LicenseNumber: license.value, ExpiryDate: expire.value})
}

peopleForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    if(validPeopleFormInputs()){
        await addPerson();
        message.textContent = "Success";
    } else {
        message.textContent = "Error";
    }
});

