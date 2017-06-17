import through  from 'through2';
var exec = require('child_process').exec;
import tmp from 'tmp'
import pb from 'wavesurfer-peakbuilder'
 
module.exports = function(options = {}) {

  return through.obj(function(file, enc, cb) {
    var self = this;
    
    console.log("Building wavesurfer peaks for", file.path)
    pb(file.path, options).then((peaks)=>{
      file.contents = new Buffer(JSON.stringify(peaks));
      file.path = file.path.replace(/\.[^/.]+$/, ".json");
      self.push(file);
      cb();      
    }).catch((err)=>{
      throw new TypeError(err);
    });
    return;
  });

};