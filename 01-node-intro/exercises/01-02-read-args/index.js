import { log } from "console";
import fs from "fs";
const fileName = "data.txt";
const args = process.argv;
const textMessage = args[2];

console.log("message :",args[2]);
console.log("message :",args[3]);
fs.writeFileSync(fileName,textMessage + "\n");
fs.appendFileSync(fileName,args[3]);


