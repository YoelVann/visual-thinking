const StudentService = require("../../../lib/services/StudentService");
const Reader = require("../../../lib/utils/Reader");

describe("Tests in StudentService class", () => {

    test("1. static method getAllStudents() must to return all the students ", () => {

        const studentsInStudentService = StudentService.getAllStudents("students.json");

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

    test("2. static method getStudentsWithCertEmails() must to return all the students email", () => {
        
       const students = [{id: "1", name: "stundet1", email: "email1@student.com", haveCertification: true}, 
                        {id: "2", name: "stundet2", email: "email2@student.com", haveCertification: false}, 
                        {id: "3", name: "stundet3", email: "email3@student.com", haveCertification: true}];
   
        const studentsEmails = StudentService.getStudentsWithCertEmails(students);
        let emailsTest = [];

        students.forEach(student => {
           if(student.haveCertification === true){
               emailsTest.push(student.email);
           }
        });

        const allStudentWithCertEmailContaided = studentsEmails.every(email => emailsTest.includes(email));

       expect(allStudentWithCertEmailContaided).toBeTruthy();
    });

    test("3. static method getStudentsWithCreditsHigherThan(students, number) must return all the students with credits higher than 500", () => {

        const students = [{id: "1", name: "stundet1", email: "email1@student.com", haveCertification: true, credits: 500}, 
                        {id: "2", name: "stundet2", email: "email2@student.com", haveCertification: false, credits: 600}, 
                        {id: "3", name: "stundet3", email: "email3@student.com", haveCertification: true, credits: 499},
                        {id: "4", name: "stundet4", email: "email4@student.com", haveCertification: false, credits: 100},
                        {id: "5", name: "stundet5", email: "email5@student.com", haveCertification: true, credits: 999}];

        const studentsWithCredisHigher = StudentService.getStudentsWithCreditsHigherThan(students, 500);
        // let credistHigherTest = [];
        const studentsCredistHigherTest = studentsWithCredisHigher.every(student => student.credits > 500);

        expect(studentsCredistHigherTest).toBeTruthy();
        
    });
});