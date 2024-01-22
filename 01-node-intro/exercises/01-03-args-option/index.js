import { error, log } from "console";
import fs from "fs";

const filePath = "data.txt";
const input = process.argv[3];
const action = process.argv[2];


switch (action) {
    case "w":
        fs.appendFileSync(filePath, input + "\n");
        console.log(input, "was written in", filePath);
        break;
    case "write":
        fs.appendFileSync(filePath, input + "\n");
        console.log(input, "was written in", filePath);
        break;

    case "r":
        console.log( fs.readFileSync(filePath,"utf-8"));
        break;
    case "read":
        console.log( fs.readFileSync(filePath,"utf-8"));
        break;

    case "c":
        fs.writeFileSync(filePath,"");
        console.log("file cleared");
        break;
    case "clear":
        fs.writeFileSync(filePath,"");
        console.log("file cleared");
        break;
    default:
        console.log("error");
}

