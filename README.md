# Samuel Margerison - 1004_FrontEnd Coursework 

[GitHub repository URL](https://github.com/Sammarger/1004_FrontEnd.git)

## HTML Pages

| People Search | Vehicle Search | Add a Vehicle |
|---------------|----------------|---------------|
| [URL](https://sammarger.github.io/1004_FrontEnd/people-search.html) | [URL](https://sammarger.github.io/1004_FrontEnd/vehicle-search.html) | [URL](https://sammarger.github.io/1004_FrontEnd/add-a-vehicle.html)|
| [Source](people-search.html) | [Source](vehicle-search.html)| [Source](add-a-vehicle.html)|

### Criteria

1. Three HTML pages

2. Files named correctly

3. Meta data contains language, character set and title

People Search:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>People Search</title>
```
Vehicle Search:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vehicle Search</title>
```
Add a Vehicle:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add a Vehicle</title>
```

4. Heading and text elements used correctly
```
    <h1>Add a Vehicle</h1>
```

5. Unordered list used to create navigation links

```
<ul class="navigation">
    <li><a href="people-search.html">People search</a></li>
    <li><a href="vehicle-search.html">Vehicle search</a></li>           
    <li><a href="add-a-vehicle.html">Add a vehicle</a></li>
</ul>
```

6. All pages share the same navigation links

7. Each page has four sections: header, footer, sidebar, main
```
<header>
    <h1>Add a Vehicle</h1>
    <ul class="navigation">
        <li><a href="people-search.html">People search</a></li>
        <li><a href="vehicle-search.html">Vehicle search</a></li>           
        <li><a href="add-a-vehicle.html">Add a vehicle</a></li>
    </ul>
</header>
<aside class="sidebar">
    <img src="https://cdn.pixabay.com/photo/2018/02/23/22/05/brain-3176780_1280.png" alt="brain">
</aside>
<main class="main-content">
    <form id="vehicle-form">
        <div>
            <label for="rego">Registration number</label>
            <input id="rego" type="text"/>
        </div>
        <div>
            <label for="make">Vehicle Make</label>
            <input id="make" type="text"/>
        </div>
        <div>
            <label for="model">Model</label>
            <input id="model" type="text"/>
        </div>
        <div>
            <label for="colour">Colour</label>
            <input id="colour" type="text"/>
        </div>
        <div>
            <label for="owner">Vehicle owner</label>
            <input id="owner" type="text"/>
        </div>
        <div>
            <button type="Submit" name="Add vehicle">Add vehicle</button>
        </div>
    </form>
    <form id="people-form" style="display: none;">
        <h4>Person entered does not exist on the database, please enter their information:</h4>
        <div>
            <label for="personid">Person ID</label>
            <input id="personid" type="text"/>
        </div>
        <div>
            <label for="name">Name</label>
            <input id="name" type="text"/>
        </div>
        <div>
            <label for="address">Address</label>
            <input id="address" type="text"/>
        </div>
        <div>
            <label for="dob">Date of birth</label>
            <input id="dob" type="text"/>
        </div>
        <div>
            <label for="license">License number</label>
            <input id="license" type="text"/>
        </div>
        <div>
            <label for="expire">Expiry date</label>
            <input id="expire" type="text"/>
        </div>
        <div>
            <button type="Submit" name="Add owner">Add owner</button>
        </div>
    </form>
    <p id="message"></p>
</main>
<footer>
    <h2>Samuel Margerison - COMP1004</h2>
</footer>
```
8. At least one image or video on each page
```
<img src="https://cdn.pixabay.com/photo/2018/02/23/22/05/brain-3176780_1280.png" alt="brain">

```

9. Accessibility check

![alt text](image.png)

##  CSS Criteria

1. The same [CSS](styles.css) style is used for all three pages.

2. Flex is used in header container for navigation links
```
header {
    grid-area: header;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}
```

3. Removed bullet points from navigation links
```
.navigation {
    width: 100%;
    list-style-type: none;

    display: flex; /* Use flex display */
    justify-content: center;
    gap: 20%;
    padding-left: 20px;
    padding-right: 20px;
}
```

4. Padding, margin and border added
```
header {
    grid-area: header;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}

.sidebar {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;

    display: flex;
    grid-area: sidebar;
    flex-grow: 1;
}
   
main {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;

    display: flex;
    grid-area: main;
    flex-grow: 1;
    flex-direction: column;

}
   
footer {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;

    display: flex;
    grid-area: footer;
}
```
5. Grid Layout used 

```
body {
    display: grid;
    height:55vw;
    grid-template-columns: 1fr 5fr 1fr; 
    grid-template-rows: auto 1fr auto; 
    grid-template-areas:
    "header header header header header"
    "sidebar main main main main" /*Ratio of 1:4*/
    "footer footer footer footer footer";
}
```

6. The page is also responsive to size.

```
@media (max-width: 500px) {
    body {
    grid-template-columns: 1fr 1fr 5fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "header header header header header"
        "main main main main main"
        "sidebar footer footer footer footer";
    }
}
```

## JavaScript Criteria

1. User is able to look up people by their first name, surname or driving license number. People table is retrieved, for each item in the table, a person is created, and if their first name, surname, full name or license number matches, return the item and success message.

```
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
```

2. User is able to look up vehicle registration number and all vehicle data is provided, including vehicle owner name. This works regardless of whether or not a car is assigned an owner.

```
function matchingItems(item) {
    const stringLine = "Registration Number: " + item.vehicleID + ", Make: " + item.make + ", Model: " + item.model +
    ", Colour: "+ item.colour + ", Vehicle Owner: " + item.owner + "</div>";

    if(rego.value === item.vehicleID) {
        tableOutput = tableOutput + "<div>";
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
```

3. User is able to enter details for a new vehicle including the owner name. The people table is searched to check whether this person exists If the owner does not exist, a new form pops up providing a space to enter a new persons information. When both forms are filled and add owner is clicked, a new person will be added to the database, then a new vehicle is added with the new person as its owner.

```
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
async function addPerson() { // Add person to table, and then add vehicle to table
    const { error } = await supabase.from('People')
    .insert({ PersonID: personID.value, Name: name.value, Address: address.value, DOB: dob.value, LicenseNumber: license.value, ExpiryDate: expire.value})
    
}

peopleForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    if(validPeopleFormInputs()){ // If all the values in the form have been filled, call add person
        await addPerson();
        if(validVehicleFormInputs()) // When add person is completed and the owner name is now 
                                     // in the system, added the vehicle aswell
            {
                await addVehicle(personID.value); // Using the user input person id
                message.textContent = `Vehicle added successfully`;
            } else {
                message.textContent = "Error"; // Otherwise throw an error, as one of the forms
            }                                  // is not complete
    } else {
        message.textContent = "Error";
    }
```

- All of these algorithms produce an error when boxes are not filled (or if both boxes are filled for the people search). As well as this, all JavaScript pages are connected to both the html file and the Supabase tables.

### Playwright tests

```
Running 14 tests using 4 workers
[1/14] [chromium] › coursework-sample.spec.js:34:1 › should set the language to 
[5/14] [chromium] › coursework-sample.spec.js:46:1 › there is a <ul> inside <hea
[6/14] [chromium] › coursework-sample.spec.js:53:1 › there are three navigation 
[8/14] [chromium] › coursework-sample.spec.js:70:1 › same external css for all h
[9/14] [chromium] › coursework-sample.spec.js:83:1 › use css flex to place navig
[10/14] [chromium] › coursework-sample.spec.js:93:1 › header should have padding
[11/14] [chromium] › coursework-sample.spec.js:105:1 › CSS grid is used to layou
[12/14] [chromium] › coursework-sample.spec.js:112:1 › search "rachel" should re
[13/14] [chromium] › coursework-sample.spec.js:122:1 › search "KWK24JI" should r
  14 passed (8.1s)
```