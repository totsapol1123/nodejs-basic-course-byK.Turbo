import fs from "fs";

const fileName = "data.txt"
const dataTxt = fs.readFileSync(fileName,"utf-8");
fs.writeFileSync(fileName,"hello wold\n");
fs.appendFileSync(fileName,"Second line");

console.log(dataTxt);

