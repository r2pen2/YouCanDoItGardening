const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Init express application
const app = express();

// Allow for CORS and file upload
app.use(cors());

// Init env files
dotenv.config();

// Start listening on defined port
app.listen(3000, () => {
    console.log('Now listening on port ' + 3000);
});

// BodyParser setup
app.use(bodyParser.json({ limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}));

// Serve static files
app.use(express.static(__dirname + "/server/static/"));

// Serve React build
app.use(express.static(__dirname + "/btb-client/build"));

// Serve react app
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/btb-client/build/index.html");
});