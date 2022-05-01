const fs = require("fs");

class Reader{
    static readJsonFile(path){
        if(path === undefined || path === null){
            return { error: "FATAL: JSON file is required" };
        } else {
            const rawdata = fs.readFileSync(path);
            return JSON.parse(rawdata);
        }
    }
}

module.exports = Reader;