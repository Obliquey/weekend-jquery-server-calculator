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
        // Extract current answer from object within history array (maybe put it into a different property) so it can be posted on the DOM separately.