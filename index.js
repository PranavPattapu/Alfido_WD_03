// cal.js

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    
    try {
        
        var result = eval(displayValue);
        
        // Display the result
        document.getElementById('display').value = result;
    } catch (error) {
      
        document.getElementById('display').value = 'Error';
    }
}