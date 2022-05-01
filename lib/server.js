const express = require("express");
const StudentsController = require("./controllers/StudentsController");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.json( { message: "Students API, welcome!" } );
});

app.get("/v1/students", (request, response) => {
    const students = StudentsController.getAllStudents();

    response.json( { students } );
});

app.get("/v1/students/emails", (request, response) => {
    const students = StudentsController.getAllStudentsWithCertEmails();
    const message = "All students emails with Certification";

    response.json( { message, students } );
});

app.get("/v1/students/credits", (request, response) => {
    const students = StudentsController.getStudentsWithCreditsHigherThan();
    const message = "All students with credits higher than 500";
    
    response.json( { message, students } );
});

app.listen(port, () => {
    console.log(`Students API in localhost: ${ port }`);
});