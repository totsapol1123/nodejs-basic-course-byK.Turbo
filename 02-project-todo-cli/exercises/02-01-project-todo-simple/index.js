import { error, log } from "console";
import fs from "fs";
import clc from "cli-color"

const messageColor = clc.yellow.bold;
const inputColor = clc.cyanBright.italic;


const filePath = "data.txt";
const action = process.argv[2];
const message = process.argv[3];



switch (action) {
    case "add":
        fs.appendFileSync(filePath, message + "\n");
        console.log(messageColor("=== TODO ==="));
        console.log(messageColor("Todo"), inputColor("\" " + message + " \" was added"));
        break;
    // case "write":
    //     fs.appendFileSync(filePath, message + "\n");
    //     console.log(message, "was written in", filePath);
    //     break;

    case "list":
        const listInput =  fs.readFileSync(filePath,"utf-8");
        console.log(messageColor("=== TODO ==="));
        console.log(inputColor(listInput));
        break;
    // case "read":
    //     console.log( fs.readFileSync(filePath,"utf-8"));
    //     break;

    case "c":
        fs.writeFileSync(filePath,"");
        console.log(messageColor("All"),inputColor(" todos are cleared"));
        break;
    case "clear":
        fs.writeFileSync(filePath,"");
        console.log(messageColor("=== TODO ==="));
        console.log(messageColor("All"),inputColor(" todos are cleared"));
        break;

        
    default:
        console.log("error");
}

