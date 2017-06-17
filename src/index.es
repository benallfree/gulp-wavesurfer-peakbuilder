import through  from 'through2';
var exec = require('child_process').exec;
import tmp from 'tmp'
import pb from 'wavesurfer-peakbuilder'
 
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