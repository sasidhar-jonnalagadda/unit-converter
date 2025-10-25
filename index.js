const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  const entered_value = inputEl.value;

  lengthConverter(entered_value);
  volumeConverter(entered_value);
  massConverter(entered_value);
});

function lengthConverter(value) {
  const meter_to_feet = (3.28084 * value).toFixed(3);
  const feet_to_meter = (0.3048 * value).toFixed(3);

  lengthEl.textContent = `${value} meters = ${meter_to_feet} feet | ${value} feet = ${feet_to_meter} meters`;
}

function volumeConverter(value) {
  const liter_to_gallon = (0.264172 * value).toFixed(3);
  const gallon_to_liter = (3.78541 * value).toFixed(3);

  volumeEl.textContent = `${value} liters = ${liter_to_gallon} gallons | ${value} gallons = ${gallon_to_liter} liters`;
}

function massConverter(value) {
  const kilogram_to_pound = (2.20462 * value).toFixed(3);
  const pound_to_kilogram = (0.453592 * value).toFixed(3);

  massEl.textContent = `${value} kilos = ${kilogram_to_pound} pounds | ${value} pounds = ${pound_to_kilogram} kilos`;
}
