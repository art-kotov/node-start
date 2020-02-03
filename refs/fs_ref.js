const fs = require("fs");
const path = require("path");

// file system
// fs.rmdir(path.join(__dirname, "notes"), {recursive: true}, (err) => {
//     console.log(err)
// });
// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//     console.log("err: ", err);
//     if (!err) {
//         fs.mkdir(path.join(__dirname, "notes", "123"), (err) => {
//         })
//     }
// });

let data = "console.log('Hi')";

fs.writeFile(path.join(__dirname, "message.js"), data, (
    err => {
        console.log(err);
    }
));

fs.appendFile(path.join(__dirname, "message.js"), "\n123", err1 => {
    console.log(err1)
})

fs.readFile(path.join(__dirname, "message.js"),'utf8', (err,data) => {
    if (err) console.log(err);
    console.log(data)
})
