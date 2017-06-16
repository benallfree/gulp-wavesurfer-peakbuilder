# gulp-wavesurfer-peakbuilder

A gulp wrapper for the mighty [wavesurfer-peakbuilder]() package. It will generate JSON peak files for each audio file processed.

`audioFile.mp3` will produce `audioFile.json` with peak array data.


```
yarn add gulp-wavesurfer-peakbuilder --dev
```

```
'use strict';

import gulp from 'gulp';
import peakbuilder from 'gulp-wavesurfer-peakbuilder';

gulp.task('peaks', () => {
  gulp.src(['./**/*.mp3'])
    .pipe(peakbuilder())
    .pipe(gulp.dest("./peaks"))
        
});

#

```