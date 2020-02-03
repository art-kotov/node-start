const path = require("path");

console.log(path.join('wwwroot', 'static_files/png/', '../gif/image.gif'));
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
