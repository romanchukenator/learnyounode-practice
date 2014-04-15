var fs = require('fs');
var pathing = require('path');

module.exports = function(path, extension, callback) {
  fs.readdir(path, function(err, files) {
    if (err) return callback(err);
    
    var files_array = [];
    
    for (var i = 0; i < files.length; i++) {
      if (pathing.extname(files[i]) == "."+extension)
        files_array.push(files[i]);
      };
    return callback(err, files_array);
  });
};

