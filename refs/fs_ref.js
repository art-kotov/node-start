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

fs.writeFile(
    path.join(__dirname, "message.js"),
    data,
    err => {
        console.log(err);
    }
);

fs.appendFile(
    path.join(__dirname, "message.js"),
    "\n123",
    err => {
        console.log(err)
    }
);

fs.readFile(
    path.join(__dirname, "message.js"),
    'utf8',
    (err, data) => {
        if (err) console.log(err);
        console.log(data)
    }
);

fs.rename(
    path.join(__dirname, "message.js"),
    path.join(__dirname, "rename.js"),
    err => {
        console.log(err)
    }
);

fs.open(
    path.join(__dirname, "rename.js"),
    "r",
    err => {
        console.log(err)
    }
);

// setTimeout(() => {
//     fs.unlink(
//         path.join(__dirname, "rename.js"),
//         (err) => {
//             if (err) throw err;
//             console.log('path/file.txt was deleted');
//         });
// }, 5000);
