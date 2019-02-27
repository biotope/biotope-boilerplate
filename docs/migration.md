# Migration Checklists

## Migration Checklist 5.6.x to 6.0.x
* remove `awesome-typescript-loader` specific configuration from `tsconfig.json`
* update ts files as needed, if any compilation error occurs.

## Migration Checklist 5.5.x to 5.6.x
* no changes needed, recheck ts files in legacy browsers due to update of babel version

## Migration Checklist 5.4.x to 5.5.x
* no changes needed, keep your eye on ts files as we introduced ts entrypoints

## Migration Checklist 5.3.x to 5.4.x
* rename resources/scss/fonts/iconfont/_icons.scss → src/resources/scss/fonts/iconfont/_icons.tpl
* remove eot font from iconfont scss
* tsconfig add lib to compiler options `"lib": ["es2017","dom"]`
* tsconfig add in exlude `"src/resources/js"`

## Migration Checklist 5.2.x to 5.3.x

### HBS / JS File Changes
* Change `handlebars.helpers.js` according to `https://github.com/biotope/biotope/blob/master/src/resources/js/handlebars.helper.js`
* Change `index.hbs` according to `https://github.com/biotope/biotope/blob/master/src/index.hbs`
* Change `browserSupport.hbs` according to `https://github.com/biotope/biotope/blob/master/src/browserSupport.hbs`
* Rename all {{ frontMatter.* }} expressions to {{ data.frontMatter.* }} - mostly used in layout template as title tag

## Migration Checklist 4.x to 5.2.x

### System
* Update to node.js > 8 (if possible install node version manager like https://github.com/tj/n)

### Configuration

* projectConfig.json rename to projectConfig.js and export data with module.exports = {}
* projectConfig.js unnecessary remove " around properties and rename all remaining from double to single quotation
* projectConfig.js change all /app/** paths to use /src
* edit /gulpfile.js (according to https://github.com/frontend-framework/frontend-framework/blob/master/gulpfile.js)
* package.json "gulp-build-framework"-Pfad anpassen (aktuellste Version setzen!): "build-framework": "https://github.com/frontend-framework/build-framework.git#5.x.x",
=> /node_modules löschen und `yarn install` ausführen

### Folders
* /app nach /src umbenennen
* /layout in /layouts umbenennen, /includes nach /layouts kopieren
* create /src/pages and move all pages (except index.html) there
* move /components, /layouts, /scaffolding to /src
* move _icons to /resources and rename it to icons
* delete gulp folder

### Files
* change all *.html extensions to *.hbs in /src, /pages, /components, /layouts, /layouts/includes, /pages
(Mac Renamer: https://mrrsoftware.com/namechanger/)
(Windows Renamer: https://gist.github.com/alxbenz/b302fa6cb74d241bdf151a1ea091eebc)

### Template Engine
* rename /src/index.html to /src/index.hbs and copy new indexr source from repo (or edit file if Indexr was customized)
* rename all /pages to *.hbs and refactor content to match YAML structure and change partial include to HBS, see https://github.com/frontend-framework/frontend-framework/blob/master/src/pages/01layout.01grid.hbs for a demo
* rename all HTML files from /layouts, /pages, /components into *.hbs

### Search & Replace

Order of execution is critical!!!!! But should be able to be used globally (strg+shift+R on src folder [windows]).

1. Search & Replace Zetzer includes to HBS partials (WITH variables)
```
REPLACE: \{\{= *ftf\.include\( *"(\.\/)?(.*)\.html"([ ,]*(\{.*\}))? *\) *\}\}
INTO: {{include '$2' frontendFrameworkMigration='$4'}}
```
This might be better if there are includes with single quotes (needs verification):
```
REPLACE: \{\{= *ftf\.include\( *['"](\.\/)?(.*)\.html['"]([ ,]*(\{.*\}))? *\) *\}\}
```
2. Remove include helpers with empty variables
```
REPLACE: \{\{(.*)frontendFrameworkMigration=\'\'\}\}
INTO: {{$1}}
```

***

Combined alternative for 1. and 2. for frameworks with includes without variables
* Search & Replace Zetzer includes to HBS partials (WITHOUT variables ONLY!!!)
```
REPLACE: \{\{= *ftf\.include\( *"(\.\/)?(.*)\.html" *\) *\}\}
INTO: {{include '$2'}}
```

***

3. Search & Replace changed paths from `{{include '...`
* "framework/" -> "components/framework/"
* "includes/" -> "layouts/includes/"
* "../_mock/" -> "_mock/"

This can be done with plain Search&Replace function, no RegEx needed.

***
***

!!!! WATCH OUT FROM HERE !!!! There might be lots of special elements. You can't blindly replace everything from now on. Check before execution.

***

4. Search & Replace Zetzer to HBS expressions with default values
```
REPLACE: \{\{= *ftf\. *(.*?) *\|\| *[\'\"](.*?)[\'\"] *\}\}
INTO: {{def $1 '$2'}}
```
! careful with multiple occurences in one line
Skip expressions where default value is empty "{{=ftf.cssClass || ''}}"

***

5. Search and replace expressions where default value is empty "{{=ftf.cssClass || ''}}"

```
REPLACE: \{\{= *ftf\. *(.*?) *\|\| *[\'\"](.*?)[\'\"] *\}\}
INTO: {{ $1 }}
```

6. Search & Replace Zetzer to HBS expressions without default values
```
REPLACE: \{\{ *\= *ftf\.(.*?\S) *\}\}
INTO: {{ $1 }}
```


### Handcraft
!!! USE THIS ONLY ON FILE LEVEL, LOCALLY !!!

* /pages/*.hbs rewrite from Zetzer/JSON to Handlebars/FrontMatter(YAML). See example: https://github.com/frontend-framework/frontend-framework/blob/demo-5.x/src/pages/01layout.01default.hbs
* Rewrite partial context expressions like `{{# partial.conditionalResources || ''}}` to `{{conditionalResources}}` (empty default `|| ''` not necessary anymore)
* Rewrite dynamic includes like `{{= ftf.include(partial.contentMain) }}` to lookup partial `{{> (lookup . 'contentMain') }}`
* search for "{{?" and rewite to handleabrs {{#if ...}} {{else}} {{/if}}

* Simple conditionals
Only {{?ftf.something }} not complex ones like {{? ftf.something || ftf.somethingElse }}
```
REPLACE: \{\{\?\s*?(!|)ftf\.(\S*?)\s*?\}\}
INTO: {{#if $1$2 }}

REPLACE: \{\{ *?\? *?\}\}
INTO: {{/if}}

REPLACE: \{\{ *?\?\? *?\}\}
INTO: {{else}}
```

* resolve frontendFrameworkMigration variables
Use this regex multiple times until there are no more findings.
!!! Careful with commas inside arrays !!!
```
frontendFrameworkMigration=["']\{\s*(.*?):\s*(.*?),[\s\r]*(.*?)\}['"]
$1=$2 frontendFrameworkMigration="{$3}"
```
Use this regex when there are no more findings above.
```
frontendFrameworkMigration=["']\{\s*(.*?):\s*(.*?)}['"]
$1 = $2
```
!!! HANDLE WITH CARE !!!


### Scripts

### SASS

### Troubleshooting
* YAML description can not contain ':'

### Noticable differences between 4.x and 5.x
#### passing variables
BS Templates pass variables automatically downwards. This may lead to some unwanted behaviour. When nesting components like accordions / tabs the variables must be unique.



## Migration Checklist 3.x to 4.x

1. Install yarn globally https://yarnpkg.com/en/docs/install

2. Remove devDependencies from local `package.json`

3. Add devDependencies from frontend-frameworks' [package.json](https://github.com/virtualidentityag/frontend-framework/blob/master/package.json)

4. Migrate bower.json to NPM

   Use [Bower package search](https://bower.io/search/) to search for the repositories behind the bower keys listed in your local `bower.json`. Double check if npm package name equals bower package name!!!!!

   Install repository with Yarn `yarn add [repo-found-at-bower-search]#[version-number] --save`.
   For example: `yarn install https://github.com/janrembold/jquery-debouncedwidth#1.1.3`

   In case the target repository doesn't have a (valid) package.json:
 * Add a package.json if you have access to that repository
 * Ask the developer to add one, or better send a pull request
 * See forked repositories in https://github.com/virtualidentityag, it's possible someone else already had that problem
 * Fork the repository and add a package.json yourself and install this repository

5. Update script paths in `scripts.html` and maybe other relevant script-loading files, e.g. `_mock/configuration.js` or `conditional-resource-loader` paths.

6. Add projectConfig.json: https://github.com/virtualidentityag/frontend-framework/blob/master/projectConfig.json
* Add new configuration files from https://github.com/virtualidentityag/frontend-framework: tsconfig.json, .babelrc

7. Update "externalResources" in projectConfig.json to match old bower resources. This task copies only relevant files from node_modules to local vendor folders

8. Rename folder `app/resources/templates` to `app/resources/hbs`

9. Rename folder `app/resources/jsx` to `app/resources/react` (fix script paths accordingly)

10. Rename folder `app/resources/css` to `app/resources/sass`

11. Check global variable naming for handlebars namespace, default is `global.configuration.data.tpl`. Some older projects use customer name instead of `global`. Change namespace in project config.

12. Load `head.configuration.js` in `<head>` BEFORE setting global configurations. Always use global.configuration getters and setters!
