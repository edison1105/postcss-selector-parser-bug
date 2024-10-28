## breaking change of postcss-selector-parser v7

In version `6.1.2`, the following code outputs `1`, but in version `7.0.0`, it outputs `2`. 
The reason is that `selector.each` executes once more after `insertAfter`. 
This caused an issue for Vue when [upgrading to postcss-selector-parser v7](https://github.com/vuejs/core/pull/12279)

## step to reproduce

- 1.clone this repo
- 2.run `npm install`
- 3.run `npm run dev`
- 4.change the version of `postcss-selector-parser` in `package.json` to `6.1.2`
- 5.repeat step 2 and 3
