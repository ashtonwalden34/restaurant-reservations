
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing ..When using http requests (URL) ..Extended property is for nested objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var tables = [{
    routeName: "yoda",
    name: "Yoda",
    phoneNumber: "Jedi Master",
    email: 900,
    uniqueID: 2000
}, {
    routeName: "darthmaul",
    name: "Darth Maul",
    phoneNumber: "Sith Lord",
    email: 200,
    uniqueID: 1200
}];

var waitList = [{
    routeName: "yoda",
    name: "Yoda",
    phoneNumber: "Jedi Master",
    email: 900,
    uniqueID: 2000
}, {
    routeName: "darthmaul",
    name: "Darth Maul",
    phoneNumber: "Sith Lord",
    email: 200,
    uniqueID: 1200
}];


// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
// Displays all waitlist
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});
// Displays all waitlist
app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation-form.html"));
});

// Create New customer - takes in JSON input
app.post("/api/tables", function (req, res) {
    var newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});
// Create New customer - takes in JSON input
app.post("/api/waitlist", function (req, res) {
    var newWaitlist = req.body;

    console.log(newWaitlist);

    waitList.push(newWaitlist);

    res.json(newWaitlist);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});