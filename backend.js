

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ztncxmihptraxhebbwqd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bmN4bWlocHRyYXhoZWJid3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjI3NzAsImV4cCI6MjAyOTYzODc3MH0.DYV7wVkw2fUq2sVpmzTf4X2GPl1V0U6VSkJgETgWCm8'
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.querySelector("form");
const name = document.getElementById("name");
const license = document.getElementById("license");
const para = document.querySelector("p");

async function fetchData() {
    const {data, error} = await supabase.from('Vehicle').select();
    console.log('Fetched data:', data)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
});