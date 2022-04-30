const StudentsService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentsController {

    static getAllStudents(){
        return StudentsService.getAllStudents("students.json");
    }
}

module.exports = StudentsController;