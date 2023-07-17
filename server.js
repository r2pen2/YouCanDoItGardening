const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const siteImages = require('./libraries/Server-Legos/siteImages');
const siteText = require('./libraries/Server-Legos/siteText');

// Init express application
const app = express();

// Allow for CORS and file upload
app.use(cors());

// Init env files
dotenv.config();

// Start listening on defined port
app.listen(3003, () => {
    console.log('Now listening on port ' + 3003);
});

// Serve static files
app.use(express.static(__dirname + "/static/"));

// BodyParser setup
app.use(bodyParser.json({ limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}));

// Server site text
app.use("/site-text", siteText);
// Server site images
app.use("/site-images", siteImages);

app.get("/images/*", (req, res) => {
    res.sendFile(__dirname + req._parsedOriginalUrl.path);
})


// Serve React build
app.use(express.static(__dirname + "/client/build"));

// Serve react app
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});