const Reader = require("../../../lib/utils/Reader");

describe("Tests in Reader class", () => {

    test("1. readJSONFile() must to return an object", () => { 

        const jsonFile = Reader.readJsonFile("students.json");

        expect(typeof jsonFile).toBe("object");
    });

    test("2. readJSONFile() must to return an error object if the param is undefined or null", () => { 
        
        const jsonFile = Reader.readJsonFile();
        const jsonFile2 = Reader.readJsonFile(undefined);

        expect(jsonFile.error).toBe("FATAL: JSON file is required");
        expect(jsonFile2.error).toBe("FATAL: JSON file is required");
    });
});