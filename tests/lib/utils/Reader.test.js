const Reader = require("../../../lib/utils/Reader");

describe("Tests in Reader class", () => {

    test("1. readJSONFile() must to return an object", () => { 

        const jsonFile = Reader.readJsonFile("students.json");

        expect(typeof jsonFile).toBe("object");
    });
});