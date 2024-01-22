import { write, read, clear } from "./utils.js";

const option = process.argv[2];
const input = process.argv[3];


switch (option) {
  case "w":
    write(input);
    break;
  case "r":
    read();
    break;
  case "c":
    clear();
    break;
    
  default:
    console.log("error");
    break;
}

