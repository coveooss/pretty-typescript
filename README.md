# pretty-typescript

[![Build Status](https://travis-ci.org/coveo/pretty-typescript.svg?branch=master)](https://travis-ci.org/coveo/pretty-typescript)
[![dependency status](https://david-dm.org/coveo/pretty-typescript.svg)](https://david-dm.org/coveo/pretty-typescript)
[![dev dependency status](https://david-dm.org/coveo/pretty-typescript/dev-status.svg)](https://david-dm.org/coveo/pretty-typescript#info=devDependencies)

A quite delectable Gulp plugin to format and lint TypeScript code.

## Example

Turn this:

```typescript
var heyo:     number

class incrediblybad
   {
private horrible_FielD: number
     dogedoge: () => any = () =>
   {
     return null      ;
  }
}
``` 

Into this:

```typescript
var heyo: number

class incrediblybad {
  private horrible_FielD: number
  dogedoge: () => any = () => {
    return null;
  }
}
```

In bonus you get this error: 

``` 
[13:30:47] [gulp-tslint] error verybad.ts[3, 7]: name must be in pascal case
```

## Usage

Step 1. Install :

```
npm install --save-dev pretty-typescript
```

Step 2. Use :

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
