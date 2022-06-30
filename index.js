const fs = require('fs');
const dataJson = require("./new.json");

//const file = fs.writeFileSync("new.json", "");


//const file2 = fs.readFileSync("./new.json")

//console.log(file2.toString());

const arr = dataJson.map((ele) => {
    return `${ele.id} - ${ele.title}
${ele.description}.
`
}).join("\n\n");

console.log(arr);

fs.writeFileSync("new.txt", arr, () => { });

