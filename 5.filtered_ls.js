// var fs = require('fs');

// var path = process.argv[2];
// var extension = "."+process.argv[3];

// fs.readdir(path, function (err, files){
//   if (err) throw err;

//   for (var i = 0; i < files.length; i++) {
//     var file_length = files[i].length;
//     var extension_length = extension.length;
//     var file_extension = files[i].substring(file_length-extension_length);

//     if (file_extension == extension)
//       console.log(files[i]);
//   }
// });

var fs = require('fs');
var path = require('path');

var file_path = process.argv[2];
var extension = process.argv[3];

fs.readdir(file_path, function(err, files){
  
  for (var i = 0; i < files.length; i++) {
    if (path.extname(files[i]) == "."+extension)
      console.log(files[i]);
  };
});




