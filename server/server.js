// BOILERPLATE SERVER SETUP
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

                // **TIME TO GET INTO SERIOUS MODE** //





// BOILERPLATE SERVER SETUP
app.listen(PORT, () => {
    console.log("Server Live On PORT", PORT);
});
