# ✨pretty-typescript✨

[![Build Status](https://travis-ci.org/coveo/pretty-typescript.svg?branch=master)](https://travis-ci.org/coveo/pretty-typescript)
[![npm version](https://badge.fury.io/js/pretty-typescript.svg)](https://badge.fury.io/js/pretty-typescript)
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
                      public   dude= <any>                       4;
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
  public dude = <any>4;
}
```

In bonus, you get this error:

```
[11:46:23] [gulp-tslint] error verybad.ts[3, 7]: name must be in pascal case
```

## Usage

Step 1. Install:

```
npm install --save-dev pretty-typescript
```

Step 2. Use:

```javascript
const prettyTypescript = require('pretty-typescript');

gulp.task('prettify', function () {
  gulp.src('src/**/*.ts')
    .pipe(prettyTypescript())
    .pipe(gulp.dest('src'));


// to fail the build when the linter complain : 
gulp.task('prettify', function () {
  gulp.src('src/**/*.ts')
    .pipe(prettyTypescript({ emitError: true }))
    .pipe(gulp.dest('src'));

});
```

Step 3. Profit !

Made with <3 by [Coveo](http://coveo.com)
