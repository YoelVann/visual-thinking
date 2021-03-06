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

    static getStudentsWithCreditsHigherThan(){
        const students = Reader.readJsonFile("students.json");

        const studentsWithCredithsHigherThan = StudentsService.getStudentsWithCreditsHigherThan(students, 500);
        return studentsWithCredithsHigherThan;
    }
}

module.exports = StudentsController;