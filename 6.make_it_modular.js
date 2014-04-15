var dirfilter = require ("./dirfilter.js");
var file_path = process.argv[2];
var extension = process.argv[3];

var callback = function(err, data) {
  i = 0;
  if (err) throw err;  
  
  while (i < data.length) {
    console.log(data[i]);
    i++;
  };
};

dirfilter(file_path, extension, callback);