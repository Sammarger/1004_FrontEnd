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

##