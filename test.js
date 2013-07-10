var rest = require('restler');
var cheerio = require('cheerio');
var fs = require('fs');

rest.get('http://google.com').on('complete', function(result,response) {
  var x = cheerio.load(result);
  console.log(x);
})

var y = cheerio.load(fs.readFileSync('index.html'));
console.log(y);
