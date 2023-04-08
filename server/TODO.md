// WHAT DO I NEED TO DO?
    <!-- Have User input -->
        // a. HTML setup for user input ✅
            // -Input and buttons for UI ✅
            // -Div for user history posting to DOM ✅
        // b. Function using jQuery to receive input values upon button click
            // -Need to retrieve and compile "NUMBER + operand + NUMBER" ✅
            // -POST req to send the server the compiled object ✅
                // -Server side receiver ✅
        // c. STRETCH GOAL: This ^^^ but with a full numPad
            // -Button for each number/operand
                // -Buttons should be appending each number/operand to the input field
            // -'=' button should take full user input and send it to server for computation
    <!-- Have Server-side input retrieval -->
        // a. POST req receivers, unpacking each object that it receives and storing them in arrays for history + variables for current ✅
        // b. Function for taking received variables and computing the answer ✅
        // c. Storing answer as object in history array ✅


        <!-- MORE TO-DO -->
        // Extract current answer from object within history array (maybe put it into a different property) so it can be posted on the DOM separately.✅


<!-- STRETCH GOAL TO-DO? -->
// 1. Convert interface to actual calculator interface
    // a. HTML button elements for each number and operator AND clear field button AND decimal point
    // b. jQuery for appending each button's value to the calculator field
    // c. CSS for formatting calculator buttons
    // d. Input validation for *2* values and an operator
        // -**jQuery + JS to retrieve input string and PARSE for individual values and the operator*will probably be server-side***
// 2. Create a Clear History button *DELETE req to the server*
    // a. Also would need to proc a new GET req for history, clearing the history field with new, empty history array
// 3. Make EACH history element an interactable piece, that when clicked it inputs the string BACK into the calculator field
    // a. Might just be a click listener for the history elements, then $(this).text() to retrieve the calculation which we then put back into the field.
    // b. Would then need to automatically run the calculate function and post answer of clicked element to the DOM 