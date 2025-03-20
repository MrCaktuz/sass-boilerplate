# Sass Boilerplate

This is a boilerplate for you sass project. It contains basics mixins, variables and normalization to enable you to start from a strong and healthy base. The goal is to help you start and not holding you back, please make it your own and customize it as much as you want.

## How to use

From the folder you want to add you SASS project run this command to create the boilerplate files.

```
npx create-sass-boilerplate
```

Once done, I strongly recommend you to change things around and make it you own.

## What's in this boilerplate

First the normalize from [Normalize.css](https://necolas.github.io/normalize.css/) v8.0.1

Then some more custom resets in the global.scss file.

The rest are some basics variables & mixins useful to start a project. You will be able to use all of them in your project by simply importing the `variables.scss` file into any SASS file you need to use these variables.

### Base font size

The base font size is gracefully reset to `10px` for an easier use or `rem` but keep the accessibility for users that changed their browser preferences.

It's then set to `1.6rem` on the `body` to have a default font size of 16px as usual.

### Color theme setup

Colors variables and mixin are setup to enable the use of dark and light theme with the use of the attribute `data-theme` on your `<html>` tag. In case you don't want this feature feel free to leave one value in the variable `$themes-enabled`.

### What else ?

Dig around, explore and edit everything this is your own now.

## Links
- [Github](https://github.com/MrCaktuz/sass-boilerplate)
- [NPM](https://www.npmjs.com/package/@mrcaktuz/sass-boilerplate)