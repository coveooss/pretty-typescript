# pretty-typescript

A quite delectable Gulp plugin to format and lint TypeScript code.

## Usage

Step 1. Install with this command :

```
npm install --save-dev pretty-typescript
```

Step 2. Use with this snippet :

```javascript
const prettyTypescript = require('pretty-typescript');

gulp.task('prettify', function () {
  gulp.src('src/**/*.ts')
    .pipe(prettyTypescript())
    .pipe(gulp.dest('src'));
});
```

Step 3. Profit !

Made with <3 by [Coveo](http://coveo.com)
