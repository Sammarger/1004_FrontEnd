
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ztncxmihptraxhebbwqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bmN4bWlocHRyYXhoZWJid3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjI3NzAsImV4cCI6MjAyOTYzODc3MH0.DYV7wVkw2fUq2sVpmzTf4X2GPl1V0U6VSkJgETgWCm8'
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.querySelector("form");
const name = document.getElementById("name");
const license = document.getElementById("license");
const para = document.querySelector("p");
var tableOutput = "";

function findNameMatch(item) {
    let matchFound = false;
    let nameString = item["Name"];
    let finalString = nameString.replace(/"/g, '');
    


    if(name.value === finalString) {
        para.textContent = `${name.value}`;
    }

}

async function fetchData() {
    const {data, error} = await supabase.from('People').select('');

    for(const item of data){
        const nameString = JSON.stringify(item);
        findNameMatch(item);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
});