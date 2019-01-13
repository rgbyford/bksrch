const express = require('express');
const apiRoutes = require ("./routes/apiRoutes");
//const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
//import {initClient, makeApiCall} from "./routes/apiRoutes");
  
// comment

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
//app.use("/api", apiRoutes);
//app.use(app.router);
//routes.initialize(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

//apiRoutes.initClient ();

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));