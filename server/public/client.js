// Set up jQuery
$(document).ready(onReady);

function onReady() {
    console.log("We're Live!");
    initHistory();
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
            $('#historyList').empty();
            $('#answerPost').empty();
            let latestcalculation = answerArray[answerArray.length - 1].answer;

            // need to extract current answer and post to DOM
            let postedAnswer = latestcalculation.substr(latestcalculation.indexOf('=') + 1);
            $('#answerPost').append(`<h3>${postedAnswer}</h3>`);
            
            // loop through array, prepending history of calculations to DOM
            for (let object of answerArray) {
                let calculation = object.answer.slice(0, (object.answer.indexOf('=')));

                $('#historyList').prepend(`
                    <li class="answer"> ${calculation}</li>
                `)
            }
        }
    ).catch(
        function(error) {
            console.log("Problem with GET /answer pushing to DOM")
        }
    )
}//end postCalculation

// function to initialize server-side history onto the DOM
function initHistory () {
    $.ajax({
        method: 'GET',
        url: '/historyInit'
    }).then( function (history) {
        $('#historyList').empty();
        for (let object of history) {
            let calculation = object.answer.slice(0, (object.answer.indexOf('=')));
                
                $('#historyList').prepend(`
                    <li class="answer"> ${calculation}</li>
                `)
            }
    }).catch(
        function(error) {
            console.log("Couldn't retrieve calculation history");
        }
    )
}//end initHistory
// function to event.preventDefault on all UI interactions
function stopRefresh(event) {
    event.preventDefault();
}//end stopRefresh