'use strict';

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _tmp = require('tmp');

var _tmp2 = _interopRequireDefault(_tmp);

var _wavesurferPeakbuilder = require('wavesurfer-peakbuilder');

var _wavesurferPeakbuilder2 = _interopRequireDefault(_wavesurferPeakbuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exec = require('child_process').exec;


module.exports = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  return _through2.default.obj(function (file, enc, cb) {
    var self = this;

    console.log("Building wavesurfer peaks for", file.path);
    (0, _wavesurferPeakbuilder2.default)(file.path, options).then(function (peaks) {
      file.contents = new Buffer(JSON.stringify(peaks));
      file.path = file.path.replace(/\.[^/.]+$/, ".json");
      self.push(file);
      cb();
    }).catch(function (err) {
      throw new TypeError(err);
    });
    return;
  });
};