const StudentService = require("../../../lib/services/StudenService");
const Reader = require("../../../lib/utils/Reader");

describe("Tests in StudentService class", () => {

    test("1. static method getAllStudents() must to return all the students ", () => {

        // const students = Reader.readJsonFile("students.json");
        const studentsInStudentService = StudentService.getAllStudents();

        const validation = studentsInStudentService.every(student => student.hasOwnProperty("id"));
        expect(validation).toBe(true);
    });
});