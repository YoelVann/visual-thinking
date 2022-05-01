const express = require("express");
const StudentsController = require("./controllers/StudentsController");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json( { message: "Students API, welcome!" } );
});

app.listen(port, () => {
    console.log(`Students API in localhost: ${ port }`);
});