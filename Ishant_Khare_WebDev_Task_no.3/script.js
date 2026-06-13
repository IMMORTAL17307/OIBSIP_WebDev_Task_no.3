const tempInput = document.getElementById("tempInput");
const inputUnit = document.getElementById("inputUnit");
const convertBtn = document.getElementById("convertBtn");
const resultArea = document.getElementById("resultArea");

convertBtn.addEventListener("click", function() {
    const tempValue = tempInput.value;
    const currentTemp = parseFloat(tempValue);
    const unit = inputUnit.value;

    if (tempValue === "" || isNaN(currentTemp)) {
        resultArea.innerHTML = `<p class="error-msg">⚠️ Please enter a valid number!</p>`;
        return;
    }

    let celsiusResult, fahrenheitResult, kelvinResult;

    if (unit === "celsius") {
        celsiusResult = currentTemp;
        fahrenheitResult = (currentTemp * 9/5) + 32;
        kelvinResult = currentTemp + 273.15;
        
        resultArea.innerHTML = `
            <div class="result-title">Conversions for ${celsiusResult.toFixed(2)}&deg;C</div>
            <div class="result-item">${fahrenheitResult.toFixed(2)} &deg;F</div>
            <div class="result-item">${kelvinResult.toFixed(2)} K</div>
        `;
    } 
    else if (unit === "fahrenheit") {
        fahrenheitResult = currentTemp;
        celsiusResult = (currentTemp - 32) * 5/9;
        kelvinResult = (currentTemp - 32) * 5/9 + 273.15;

        resultArea.innerHTML = `
            <div class="result-title">Conversions for ${fahrenheitResult.toFixed(2)}&deg;F</div>
            <div class="result-item">${celsiusResult.toFixed(2)} &deg;C</div>
            <div class="result-item">${kelvinResult.toFixed(2)} K</div>
        `;
    } 
    else if (unit === "kelvin") {
        kelvinResult = currentTemp;
        celsiusResult = currentTemp - 273.15;
        fahrenheitResult = (currentTemp - 273.15) * 9/5 + 32;

        resultArea.innerHTML = `
            <div class="result-title">Conversions for ${kelvinResult.toFixed(2)} K</div>
            <div class="result-item">${celsiusResult.toFixed(2)} &deg;C</div>
            <div class="result-item">${fahrenheitResult.toFixed(2)} &deg;F</div>
        `;
    }
});
