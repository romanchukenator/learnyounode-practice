var http = require("http");
var url = process.argv[2];
  
// console.log(url);
// console.log(http.get(url));

http.get(url, function (response) {
  response.setEncoding("utf8");
  response.on("data", function (chunk) {
    console.log(chunk);
  });
  response.on("error", console.log);
});

