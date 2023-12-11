let conversionNumber = document.getElementById("conversion-number");
const convertBtn = document.getElementById("convert-btn");

let calculation1 = document.getElementById("calculation1");
let calculation2 = document.getElementById("calculation2");
let calculation3 = document.getElementById("calculation3");

let meter = 3.2808399; // feet
let liter = 0.264172052; // gallon
let kilogram = 2.20462262; // pound

let feet = 0.3048; // meter
let gallon = 3.78541178; // liter
let pound = 0.45359237; // kilogram

function calculate() {
  if (conversionNumber.value > 0) {
    calculation1.innerHTML = `${conversionNumber.value} meters = 
  ${(conversionNumber.value * meter).toFixed(3)} feet | ${
      conversionNumber.value
    } feet = ${(conversionNumber.value * feet).toFixed(3)} meters`;

    calculation2.innerHTML = `${conversionNumber.value} liters = 
  ${(conversionNumber.value * liter).toFixed(3)} gallons | ${
      conversionNumber.value
    } gallons = ${(conversionNumber.value * gallon).toFixed(3)} liters`;

    calculation3.innerHTML = `${conversionNumber.value} kilos = 
  ${(conversionNumber.value * kilogram).toFixed(3)} pounds | ${
      conversionNumber.value
    } pounds = ${(conversionNumber.value * pound).toFixed(3)} kilos`;
  }
}
