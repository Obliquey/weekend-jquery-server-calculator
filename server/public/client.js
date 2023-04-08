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

    // click listener for clearFieldsButton
    $('#finishers').on('click', '#clearFieldsButton', clearFields)

    // Need function for GET req for calculation history
}
let operator;

// function to clear fields when #clearFieldsButton is clicked
function clearFields() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
}//end clearFields


// function to decide the operator
function operatorFunction() {
    operator = $(this).text();
}//end operatorFunction

// function to retrieve and compile user input into object and POST to server
function createInputObject() {
    // store input values and put into object
    let value1 = $('#inputOne').val();
    let value2 = $('#inputTwo').val();
    let operation = {
        firstNumber: value1,
        secondNumber: value2,
        operator: operator
    }

    // clear input fields
    $('#inputOne').val('');
    $('#inputTwo').val('');

     if (!!value1 && !!value2 && !!operator) {
        // send object{value1, value2, operator} to server for calculation
        $.ajax({
            method: 'POST',
            data: operation,
            url: '/calculation',
        }).then(
            function (response) {
            // run function to post calculation history
                postHistory();

        }).catch(
            function(error) {
                console.log("Something went wrong with our POST req to /calculation");
            }
        )
     }
}//end createInputObject

// function to post GET req, e.g. the returned calculation, to the DOM
// CALLED BY createInputObject
function postHistory(){
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(
        function (answerArray) {
            $('#history').empty();
            let latestAnswer = answerArray[answerArray.length - 1].answer

            
            // loop through array, prepending history of calculations to DOM
            for (let object of answerArray) {
            $('#history').prepend(`
                <li class="answer">➡️ ${object.answer}</li>
            `)
            }
        }
    ).catch(
        function(error) {
            console.log("Problem with GET /answer pushing to DOM")
        }
    )
}//end postCalculation


// function to event.preventDefault on all UI interactions
function stopRefresh(event) {
    event.preventDefault();
}//end stopRefresh