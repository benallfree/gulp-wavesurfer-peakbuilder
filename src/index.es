var through = require('through2');
var exec = require('child_process').exec;
var tmp = require('tmp');
var pb = require('wavesurfer-peakbuilder');
 
module.exports = function(options = {}) {

  return through.obj(function(file, enc, cb) {
    var self = this;
    
    pb(file.path, options).then((peaks)=>{
      file.contents = new Buffer(JSON.stringify(final));
      file.path = file.path.replace(/\.[^/.]+$/, ".json");
      self.push(file);
      cb();      
    });
    return;
  });

};