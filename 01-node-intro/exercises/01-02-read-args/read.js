import { log } from 'console';
import fs from 'fs';
const fileName = "data.txt";
const textMessage = fs.readFileSync(fileName,"utf-8");

console.log(textMessage);