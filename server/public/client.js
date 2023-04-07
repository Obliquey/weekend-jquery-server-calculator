// Set up jQuery
$(document).ready(onReady);

function onReady() {
    console.log("We're Live!");

    // Stopping event default
    $('#calculatorInput').on('click', stopRefresh)
    // This will be the function that receives the user input and make a POST req to the server
    $('#calculatorInput').on('click', '#equalsButton', createInputObject);

    // click listener for operators
    $('#operatorButtons').on('click', '.operators', operatorFunction)

}
let operator;
// function to decide the operator
function operatorFunction() {
    operator = $(this).text();
}

// function to retrieve and compile user input and POST to server
function createInputObject() {
    let firstNumber = $('#inputOne').val();
    let secondNumber = $('#inputTwo').val();


    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
}



function stopRefresh(event) {
    event.preventDefault();
}