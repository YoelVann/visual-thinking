const StudentsController = require("../../../lib/controllers/StudentsController");
const Reader = require("../../../lib/utils/Reader");

describe("Tests in StudentsController class", () => {

    test("1. static method getAllStudents must return all students given a students json file", () => { 

        const studentsJson = Reader.readJsonFile("students.json");
        const studentsJsonId = studentsJson.map(student => student.id);

        const studentsReturned = StudentsController.getAllStudents();
        const studentsReturnedId = studentsReturned.map(student => student.id);

        const verifyAllStudentsReturned = studentsReturnedId.every(studentId => studentsJsonId.includes(studentId))
        
        expect(verifyAllStudentsReturned).toBeTruthy();
    });

    test("2. static method getAllStudentsWithCertEmails() must return all students email if the student have certification", () => {
       
        const studentsJson = Reader.readJsonFile("students.json");
        const studentsEmails = StudentsController.getAllStudentsWithCertEmails();

        let studentsCertsEmails = [];

        studentsJson.forEach(student => {
           if(student.haveCertification === true){
            studentsCertsEmails.push(student.email);
           }
        });

        const allStudentWithCertEmailContained = studentsEmails.every(email => studentsCertsEmails.includes(email));

        expect(allStudentWithCertEmailContained).toBeTruthy();
    });
});