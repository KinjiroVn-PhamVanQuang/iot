// Import packages and set the port
import bodyParser from "body-parser";
import express from "express";
import routes from "./routes/route.js";


const port = 3002;
const app = express();

// Set EJS as the view engine and specify the views directory
app.set("view engine", "ejs");


// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

routes(app);



// Start the server
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});