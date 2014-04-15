var fs = require('fs');

var path = process.argv[2];
var extension = "."+process.argv[3];

fs.readdir(path, function (err, files){
  if (err) throw err;

  for (var i = 0; i < files.length; i++) {
    var file_length = files[i].length;
    var extension_length = extension.length;
    var file_extension = files[i].substring(file_length-extension_length);

    if (file_extension == extension)
      console.log(files[i]);
  }
});


// var file = fs.readFile(process.argv[2], "utf8", function(err, data) {
//   if (err) throw err;
//   number_of_lines(data.split("\n").length - 1);
// });

// function number_of_lines(data) {
//   console.log(data);
// };
