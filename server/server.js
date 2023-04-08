// BOILERPLATE SERVER SETUP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

                // **TIME TO GET INTO SERIOUS MODE** //

// global variables used in converting user input into sendable answerObject + storying calculation history
let operation;
let history = [];

// function to parse objects + calculate
function calculate(object) {
    let value1 = Number(object.firstNumber);
    let value2 = Number(object.secondNumber);
    let calculation;

    // switch statement to determine which operation to run
    switch (object.operator) {
        case '+':
            calculation = (`${value1} ${object.operator} ${value2} = ${value1 + value2}`);
            break;
        case '-':
            calculation = (`${value1} ${object.operator} ${value2} = ${value1 - value2}`);
            break;
        case '*':
            calculation = (`${value1} ${object.operator} ${value2} = ${value1 * value2}`);
            break;
        case '/':
            calculation = (`${value1} ${object.operator} ${value2} = ${value1 / value2}`);
            break;
    }

    return calculation;

} //end calculate

// function to receive POST req including object{value1,value2, operator} for use in calculation 
app.post('/calculation', (req, res) => {
    console.log("We're in POST /calculation")
    operation = req.body;
    // let answerObject = {answer: `${calculate(operation)}`}
    history.push({answer: `${calculate(operation)}`});
    console.log(history);
    
    res.sendStatus(201);
})//end POST /calculation

// server function to process GET req to send answer history back to client-side.
app.get('/history', (req, res) => {
    console.log("We're in GET /answer");

    res.send(history);
})//end GET /answer



// BOILERPLATE SERVER SETUP
app.listen(PORT, () => {
    console.log("Server Live On PORT", PORT);
});
