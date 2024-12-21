
function convertToFahrenheit() {
    const celsiusValue = parseFloat(document.getElementById('tempValue').value);
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            document.getElementById('tempResult').innerText = fahrenheitValue.toFixed(2);
            document.getElementById('tempUnit').innerText = "Fahrenheit";
            document.getElementById('tempFormula').innerText = `${celsiusValue}°C × 9/5) + 32 = ${fahrenheitValue.toFixed(2)}°F`;
}
function convertToCelsius() {
        const fahrenheitValue = parseFloat(document.getElementById('tempValue').value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        document.getElementById('tempResult').innerText = celsiusValue.toFixed(2);
        document.getElementById('tempUnit').innerText = "Celsius";
        document.getElementById('tempFormula').innerText = `${fahrenheitValue}°F - 32) × 5/9 = ${celsiusValue.toFixed(2)}°C`;

}
function convertToKilograms() {
    const value = document.getElementById('massValue').value || 0;
    const result = value * 0.453592;
    document.getElementById('massResult').innerText = result.toFixed(2);
    document.getElementById('massUnit').innerText = "Kilograms";
    document.getElementById('massFormula').innerText = `${value} lbs × 0.453592 = ${result.toFixed(2)} kg`;
}

function convertToPounds() {
    const value = document.getElementById('massValue').value || 0;
    const result = value / 0.453592;
    document.getElementById('massResult').innerText = result.toFixed(2);
    document.getElementById('massUnit').innerText = "Pounds";
    document.getElementById('massFormula').innerText = `${value} kg ÷ 0.453592 = ${result.toFixed(2)} lbs`;
}
        
        let day = 3

        switch(day){
            case 1:
                console.log ("Monday")
                break
            case 2:
                console.log("Tuesday")
                break
            case 3:
                console.log ("Wednesday")
                break    
            case 4:
                console.log ("Thursday")
                break 
            case 5:
                console.log("Friday")
            case  6:
                console.log("Saturday")           
        }
let age = 17
let result =age >=18 ? "Adult": "Minor"
console.log(result)

if(age<13){
   result="child" 
}