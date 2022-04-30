const Reader = require("../utils/Reader");

class StudentService {

    static getAllStudents(){
        return Reader.readJsonFile("students.json");
    }
}

module.exports = StudentService;