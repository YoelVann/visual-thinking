const Reader = require("../utils/Reader");

class StudentService {

    static getAllStudents(students){
        return Reader.readJsonFile(students);
    }

    static getStudentsWithCertEmails(students){
        const studentsWitCert = students.filter(student => student.haveCertification === true);
        const studentsEmails = studentsWitCert.map(student => (student.email));

        return studentsEmails;
    }

    static getStudentsWithCreditsHigherThan(students, number){
        const studentsWithCreditsHigerThan = students.filter(student => student.credits > number);

        return studentsWithCreditsHigerThan;
    }
}

module.exports = StudentService;