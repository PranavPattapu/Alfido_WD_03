// cal.js

// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    var displayValue = document.getElementById('display').value;
    
    try {
        // Use eval to calculate the result
        var result = eval(displayValue);
        
        // Display the result
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle errors (e.g., division by zero)
        document.getElementById('display').value = 'Error';
    }
}