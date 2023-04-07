$(document).ready(onReady);

function onReady() {
    console.log("We're Live!");

    // This will be the function that receives the user input and make a POST req to the server
    $('#finishers').on('click', createInputObject);

}