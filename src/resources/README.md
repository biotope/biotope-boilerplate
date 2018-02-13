# Resources folder

The `/resources` folder contains globally available resources like scripts, styles, images, icons, fonts and precompiled handlebars templates.

See the README.md files inside those folders for detailed information.

## Useref 
The file `_useref.html` combines all global script and style tags that are concatenated and minfied for production usage.
Mostly those files are situated under `/src/layouts/includes/*hbs`. Script and style blocks are outlined with a special comment tag like:

```html
<!-- build:js(.tmp) resources/js/scripts.all.min.js  -->
<script src="resources/js/vendor/jquery.js"></script>
<!-- ... and all other files that will get merged into "scripts.all.min.js" -->
<!-- endbuild -->
```

See https://github.com/jonkemp/gulp-useref for task documentation
  

## Favicon
To auto-generate favicons just put a `favicon.png` directly into `/resources` folder. The PNG image should be squared and at least 512x512 pixels.
