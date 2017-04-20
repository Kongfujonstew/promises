/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

var pluckFirstLineFromFile = function(filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      callback(err, null);
    } else {
      var line = content.split('\n')[0];
      callback(null, line);
    }
  });
};


var getStatusCode = function (url, callback) {
  request.get(url, function(err, content) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, content.statusCode);
    }
  });
};

module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
