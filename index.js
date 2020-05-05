
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



// Displays a single character, or shows "No character found"
app.get("/api/customers/:customer", function (req, res) {
    var chosen = req.params.customers;

    console.log(chosen);

    for (var i = 0; i < customers.length; i++) {
        if (chosen === customers[i].routeName) {
            return res.json(customers[i]);
        }
    }

    return res.send("No character found");

});

// Create New customer - takes in JSON input
app.post("/api/customers", function (req, res) {
    var newCustomer = req.body;

    console.log(newCustomer);

    characters.push(newCustomer);

    res.json(newCustomer);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// In this code, jQuery is used to "download" the data from our server
// We then dynamically display this content in our table. This is very similar to the group projects you just completed.
// It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

// function runTableQuery() {
//     // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//     $.ajax({ url: "/api/tables", method: "GET" })
//         .then(function (tableData) {

//             // Here we then log the tableData to console, where it will show up as an object.
//             console.log(tableData);
//             console.log("------------------------------------");

//             // Loop through and display each of the customers
//             for (var i = 0; i < tableData.length; i++) {

//                 // Get a reference to the tableList element and populate it with tables
//                 var tableList = $("#tableList");

//                 // Then display the fields in the HTML (Section Name, Date, URL)
//                 var listItem = $("<li class='list-group-item mt-4'>");

//                 listItem.append(
//                     $("<h2>").text("Table #" + (i + 1)),
//                     $("<hr>"),
//                     $("<h2>").text("ID: " + tableData[i].customerID),
//                     $("<h2>").text("Name: " + tableData[i].customerName),
//                     $("<h2>").text("Email: " + tableData[i].customerEmail),
//                     $("<h2>").text("Phone: " + tableData[i].phoneNumber)
//                 );

//                 tableList.append(listItem);
//             }
//         });
// }

// function runWaitListQuery() {

//     // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//     $.ajax({ url: "/api/waitlist", method: "GET" })
//         .then(function (waitData) {

//             // Here we then log the waitlistData to console, where it will show up as an object.
//             console.log(waitData);
//             console.log("------------------------------------");

//             // Loop through and display each of the customers
//             for (var i = 0; i < waitData.length; i++) {

//                 // Get a reference to the waitList element and populate it with tables
//                 var waitList = $("#waitList");

//                 // Then display the fields in the HTML (Section Name, Date, URL)
//                 var listItem = $("<li class='list-group-item mt-4'>");

//                 listItem.append(
//                     $("<h2>").text("Table #" + (i + 1)),
//                     $("<hr>"),
//                     $("<h2>").text("ID: " + waitData[i].customerID),
//                     $("<h2>").text("Name: " + waitData[i].customerName),
//                     $("<h2>").text("Email: " + waitData[i].customerEmail),
//                     $("<h2>").text("Phone: " + waitData[i].phoneNumber)
//                 );

//                 waitList.append(listItem);
//             }
//         });
// }

// // This function resets all of the data in our tables. This is intended to let you restart a demo.
// function clearTable() {
//     alert("Clearing...");

//     // Clear the tables on the server and then empty the elements on the client
//     $.ajax({ url: "/api/clear", method: "POST" }).then(function () {
//         $("#waitList").empty();
//         $("#tableList").empty();
//     });
// }

// $("#clear").on("click", clearTable);


// // Run Queries!
// // ==========================================
// runTableQuery();
// runWaitListQuery();
