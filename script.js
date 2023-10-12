function convertTemperature() {
    // Get the input temperature value and scales
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromScale = document.getElementById("fromScale").value;
    var toScale = document.getElementById("toScale").value;

    // Check if the input is a valid number
    if (!isNaN(temperature)) {
        var result;

        // Perform the temperature conversion
        if (fromScale === "Celsius" && toScale === "Fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (fromScale === "Celsius" && toScale === "Kelvin") {
            result = temperature + 273.15;
        } else if (fromScale === "Fahrenheit" && toScale === "Celsius") {
            result = (temperature - 32) * 5/9;
        } else if (fromScale === "Fahrenheit" && toScale === "Kelvin") {
            result = (temperature - 32) * 5/9 + 273.15;
        } else if (fromScale === "Kelvin" && toScale === "Celsius") {
            result = temperature - 273.15;
        } else if (fromScale === "Kelvin" && toScale === "Fahrenheit") {
            result = (temperature - 273.15) * 9/5 + 32;
        } else {
            result = temperature; // Same scale conversion
        }

        // Display the result
        document.getElementById("result").innerHTML = temperature + " " + fromScale + " is equal to " + result.toFixed(2) + " " + toScale;
    } else {
        // Display an error message if the input is not a valid temperature
        document.getElementById("result").innerHTML = "Please enter a valid temperature.";
    }
}
