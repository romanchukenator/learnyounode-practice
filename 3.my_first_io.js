var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var string = file.toString();
var lines = string.split("\n");
var number_of_lines = lines.length - 1

console.log(number_of_lines);