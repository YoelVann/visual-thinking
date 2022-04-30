const StudentsService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentsController {

    static getAllStudents(){
        return StudentsService.getAllStudents("students.json");
    }

    static getAllStudentsWithCertEmails(){
        const students = Reader.readJsonFile("students.json");

        const studentsWithCertsEmails = StudentsService.getStudentsWithCertEmails(students);
        return studentsWithCertsEmails;
    }
}

module.exports = StudentsController;