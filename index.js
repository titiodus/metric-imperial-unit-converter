/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* PSEUDO CODE */

// Take number in input box and convert them to meter/feet, volume/gallon and kilogram/pound
// Value should be two decimal places.

// DOM MANIPULATION

let inputValue = document.getElementById("input-value")
let lengthValue = document.getElementById("length-value")
let volumeValue = document.getElementById("volume-value")
let massValue = document.getElementById("mass-value")
const toggle = document.getElementById("dark-mode")
const theme = window.localStorage.getItem("theme")

// dark theme code

toggle.addEventListener('click', () => {
   
    document.body.classList.toggle("dark");

    if (theme === "dark") {
        window.localStorage.setItem("theme", "light")
    }else {
        window.localStorage.setItem("theme", "dark"); 
    }
})

// creating the event for the button

document.getElementById("convert-button").addEventListener('click', function(){
    
    convertToLengthToFeet()
    convertToLitreToGallon()
    convertToKilogramToPound()
})


// Creating function to convert to length and to feet

function convertToLengthToFeet() {
    let feet = (inputValue.value * 3.281).toFixed(2)
    let meter = (inputValue.value / 3.281).toFixed(2)
    lengthValue.textContent = (`${inputValue.value} meter = ${feet} feet | ${inputValue.value} feet = ${meter} meter`)
}

// Creating function to convert to litres and to gallon

function convertToLitreToGallon() {
    let gallon = (inputValue.value * 0.264).toFixed(2)
    let litre = (inputValue.value / 0.264).toFixed(2)
    volumeValue.textContent = (`${inputValue.value} litres = ${gallon} gallons | ${inputValue.value} gallons = ${litre} litres`)
}

// Creating function to convert to kilogram and to pound

function convertToKilogramToPound() {
    let pound = (inputValue.value * 2.204).toFixed(2)
    let kilogram = (inputValue.value / 2.204).toFixed(2)
    massValue.textContent = (`${inputValue.value} kilograms = ${pound} pounds | ${inputValue.value} pounds = ${kilogram} kilograms`)
}
