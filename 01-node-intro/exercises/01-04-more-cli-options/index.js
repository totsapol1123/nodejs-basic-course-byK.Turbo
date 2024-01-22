import { error, log } from "console";
import fs from "fs";

const filePath = "data.txt";
const action = process.argv[2];
const message = process.argv[3];
const loop = process.argv[4];

const duplicate = (message,loop) => {
    for (let index = 0; index < loop; index++) {
        fs.appendFileSync(filePath,message + "\n");
        console.log(`No.${index+1} `,message, filePath);
    }
    
}

switch (action) {
    case "w":
        fs.appendFileSync(filePath, message + "\n");
        console.log(message, "was written in", filePath);
        break;
    case "write":
        fs.appendFileSync(filePath, message + "\n");
        console.log(message, "was written in", filePath);
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

    case "d":
        duplicate(message,loop);
        break;
    case "duplicate":
        duplicate(message,loop);
        break;
        
    default:
        console.log("error");
}

