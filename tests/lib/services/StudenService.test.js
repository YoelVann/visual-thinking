const StudentService = require("../../../lib/services/StudenService");
const Reader = require("../../../lib/utils/Reader");

describe("Tests in StudentService class", () => {

    test("1. static method getAllStudents() must to return all the students ", () => {

        const studentsInStudentService = StudentService.getAllStudents();

        const validation = studentsInStudentService.every(student => student.hasOwnProperty("id"));
        const validation2 = studentsInStudentService.every(student => student.hasOwnProperty("name"));
        const validation3 = studentsInStudentService.every(student => student.hasOwnProperty("email"));
        const validation4 = studentsInStudentService.every(student => student.hasOwnProperty("credits"));
        const validation5 = studentsInStudentService.every(student => student.hasOwnProperty("enrollments"));
        const validation6 = studentsInStudentService.every(student => student.hasOwnProperty("haveCertification"));

        expect(validation).toBe(true);
        expect(validation2).toBe(true);
        expect(validation3).toBe(true);
        expect(validation4).toBe(true);
        expect(validation5).toBe(true);
        expect(validation6).toBe(true);
    });
});