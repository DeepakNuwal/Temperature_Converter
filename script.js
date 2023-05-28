
const form = document.getElementById('converter-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const tempInput = document.getElementById('temp-input').value;
  const inputUnit = document.getElementById('unit-selector').value;
  const outputUnit = document.getElementById('output-selector').value;
  
  let kelvinTemp;
  if (inputUnit === 'celsius') {
    kelvinTemp = parseFloat(tempInput) + 273.15;
  } else if (inputUnit === 'fahrenheit') {
    kelvinTemp = (parseFloat(tempInput) - 32) * (5/9) + 273.15;
  } else {
    kelvinTemp = parseFloat(tempInput);
  }
  
  let outputTemp;
  if (outputUnit === 'celsius') {
    outputTemp = kelvinTemp - 273.15;
  } else if (outputUnit === 'fahrenheit') {
    outputTemp = (kelvinTemp - 273.15) * (9/5) + 32;
  } else {
    outputTemp = kelvinTemp;
  }
  
  const convertedTemp = document.getElementById('converted-temp');
  convertedTemp.value = outputTemp.toFixed(2) + "°" + outputUnit.toLowerCase();

}); 