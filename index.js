const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
	//Строка 9
	res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Строка 10
});
