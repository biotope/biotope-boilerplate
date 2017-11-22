## file structure demo ##

This folder shows a demo on how to structurize your files for one specific component. There are several folders, each serving a unique purpose. The folders are:

- /includes: This contains all handlebars subpartials used by this component. *.hbs files will be available via the hbs partial helper.
- resource folders: for a better overview of all containing elements the resources should be placed inside a corresponding folder. e.g. /scss for all *.scss files, /js for all *.js files
- /scaffolding: This contains the scaffolding structure template, as well as scaffolding data needed for this component. 

In the root folder is the component main template, named as the component and the main component data.

Optionally all resources can also be placed in the root folder directly.

