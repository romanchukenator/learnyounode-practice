var fs = require('fs');

var file = fs.readFile(process.argv[2], "utf8", function(err, data) {
  if (err) throw err;
  number_of_lines(data.split("\n").length - 1);
});

function number_of_lines(data) {
  console.log(data);
};
