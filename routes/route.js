const electric = [
	{
		id: 1,
		name: "IC",
		voltage: 4.5,
		amperage: 3,
	},
	{
		id: 2,
		name: "IC",
		voltage: 4.5,
		amperage: 3.1,
	},
	{
		id: 3,
		name: "IC",
		voltage: 4.5,
		amperage: 3,

	},
];
const router = (app) => {
	app.get("/", (request, response) => {
		response.send({
			message: "Node.js and Express REST API",
		});
	});
	app.get("/api/electricInfo", (request, response) => {
	 	response.send(electric);
    });

	
	app.get("/api/listElectricInfo", (request, response) => {
		response.render("electricInfo", { electric }); // Render the EJS template
	});
	
};
export default router;
