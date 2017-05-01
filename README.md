# frontend-framework

## Introduction

This frontend framework boilerplate helps you to easily kickstart new frontend frameworks. Just mirror this repository, run the setup tasks and start developing.
It depends heavily on the [gulp-build-framework](https://github.com/virtualidentityag/gulp-build-framework)

## Setup

### 1. Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. In fact node.js even runs a tiny webserver which will enable you to browse the components of the frontend.
**NPM** is the Node Package Manager and is only used to install yarn.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.

### 2. yarn
**yarn** is a Node Package Manager which will allow us to download and install required components for Node.js with ease
See <https://yarnpkg.com/> for details of this dependency manager

1. Run `npm install -g yarn` to install yarn dependency manager 
1a. (On windows) You can also get the installer from <https://yarnpkg.com/en/docs/install>.

### 3. Gulp

**Gulp** is a task automator running on Node.js. It will do a lot of hard work for us preparing the source code for productive use. Amongst others Gulp combines files, shrinks them, tests code for faults etc.

1. Run `yarn global add gulp-cli` to install Gulp's command line interface globally. This will put the gulp command in your system path, allowing it to be run from any directory.
2. Test the installation of Gulp by running `gulp --version` from your command line.


## Starting

After your are finished with the step before and everything runs fine, run these steps to get your project on the road.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `yarn install`
4. To
	* **start** the development environment run `gulp serve`
	* **build** the code for production use run `gulp build`

## Custom Configuration

How to set up your personal boilerplate, with dependencies you really need.

### projectConfig.json

This file lets you enable and disable certain tasks as well as specify additional resource folders.

__resource folders__
To add additional resource folders, create the folders and add the paths to the global.resources array.
The path needs to be prepended with a "/" and relative to the app folder.
The default resource folder is "/resources"

__tasks__
To disable certain tasks, simply set the specific task to false. 
At the moment the tasks that can be disabled are: "linting", "iconfont", "angular", "handlebars", "uglify", "cleanCss", "favicons", "cssStats".
Per default all tasks are enabled.

__uglifyExceptions__
You can add files which should not be uglified during the uglify task (e.g. files that are already uglified)

__externalResources__
Add file paths of files that are needed for the build package. The path must be relative to each package inside node_modules.

## Patterns

We use different boilerplates to keep our coding structure as homogenous as possible. 

### JavaScript / TypeScript

#### jQuery TypeScript Plugins - Advanced

The framework contains a local demo integration of the VI jQuery Boilerplate. 
See `app/resources/ts/jquery.plugin.advanced.ts` for a local demo.

For more informations have a look at the repository: https://github.com/vi-plugins/jquery-boilerplate

If you are going to write generic plugins that might be useful in lots of other projects, 
please mirror the repository above and add them to our [vi-plugins](https://github.com/vi-plugins) project.

For project-use only you can copy the structure into your local `app/resources/ts/` folder.


#### jQuery TypeScript Plugins - Simple

The standalone jQuery TypeScript Plugin is a TypeScript port of the legacy jQuery Plugin boilerplate.
See `app/resources/ts/jquery.plugin.simple.ts` for a local demo.

It includes the same features as the legacy boilerplate but nicely enriched by lots of TypeScript features like type checking and code completion. 
We also use the possibility to compile to ES5 or ES6. Depending on the projects browser matrix.   

The corresponding pattern file can be found in `patterns/jquery.typescript.boilerplate.ts` 


#### Plain and simple jQuery Plugins (legacy way)

That is the plain legacy jQuery Plugin boilerplate.  

The corresponding pattern file can be found in `/patterns/jquery.typescript.boilerplate.ts`


### CSS / SASS

We compile the CSS stylesheets with a SASS compiler. To organize the code as efficient as possible we use the BEM methodology: 
see https://github.com/virtualidentityag/viFrontendStandards/wiki/vi-BEM  


### React

All react files go to /resources/react/ folder. The entry points of each React application must start in this folder, all necessary includes should lie in a dedicated application folder.
All React files end with `.jsx` or `.tsx` .

Example for an app called "test":

/resources/react/test.jsx
/resources/react/test/TestClass1.jsx
/resources/react/test/TestClass2.jsx
and so on...

https://camjackson.net/post/9-things-every-reactjs-beginner-should-know


## Development

run the boilerplate with `gulp serve`

### 1. Our helpers

* `{{= ftf.include("path/to/file.html", { myValue: 123 }) }}` - Include a html file. You can  pass a json object with own data
* `{{= ftf.text(500) }}` - Generate lorem ipsum text with 500 chars
* `{{= ftf.renderHbs("demo", "app/_mock/demo.json") }}` - Render a hbs file with json data into static templates

@ToDo - add all helper functions

### 2. Folder structure

* `/app` is where all of the actual frontend code is stored
* `/app/_assets` holds static placeholder files like images, audio- and video files.
* `/app/_mock` holds files that would be generated dynamically (such as `nav.json`) by the cms implementing the frontend
* `/app/_partials` holds snippets of html code that are reused throughout the frontend
* `/app/resources` holds JavaScript, TypeScript, SASS/CSS and other files
* `/test` is where we put automated tests for Travis CI and Nightwatch Testing with Selenium

## Testing

**Nightwatch.js** is an End-to-End (E2E) testing solution for browser based apps and websites using Selenium to automatically 
perform commands and assertions on DOM elements.

There are two different Gulp Tasks: 'test' for using an external Selenium server and 'test:dev' to start the test on a 
local selenium. The npm packages for 'test:local' are not included in the package.json, so you need to install them manually.

**Travis CI** Testing is used for automated boilerplate testing. It uses Mocha/Chai and checks the build process and compares the generated static files with there fixtures. To run the tests locally execute `mocha test/travis/build.js` from terminal. Install mocha globally.

### gulp test

Gulp task for testing on external Selenium server.
Add your settings in the configuration file `/test/nightwatch/nightwatch.js`

`gulp test -url=http://YOURDOMAIN.com`

'-url' can be used in nightwatch tests with 'browser.launch_url'.
Example:
```javascript
module.exports = {
   'Visual Test - Stage Component': function(browser) {
      browser
         .windowMaximize()
         .url(browser.launch_url + '/90demo.01icons.html')
         .waitForElementPresent('body', 3000)
         .assert.title('VIGulpFrontendBoilerplate')
         .end();
   }
};
```

### gulp test:dev

Add your settings in the configuration file `/test/nightwatch/nightwatch.dev.js`
npm packages to install: 
Selenium.jar: `npm install selenium-server-standalone-jar`
GraficMagick: `npm install gm`

Download and install imageMagick: http://www.imagemagick.org

## Build

run the boilerplate with `gulp build`
If everything is correct, you will find a build version of your code in the **dist** directory.
This contains among others a min and concat version of your js and css files

## Release
There is a gulp task for doing releases. Use gulp release --type=[major,minor,patch,prerelease] will do the following steps for you:
1. update package.json version
2. git commit the changed package.json
3. git push
4. set a GIT tag for this version
5. coming soon: create a diff changelog from last version to this version

## Troubleshooting

### Line-break errors in eslint

If there are line-break errors in eslint, it may be because false line endings set by git.
To prevent this use the git config "core.autocrlf". 
Use the command "git config core.autocrlf false" to prevent windows from using crlf instead of lf.

### gulp serve malloc error (Unix Only)

************** gulp(975,0x104c15000) malloc: *** error for object 0x10164201c: pointer being freed was not allocated *** set a breakpoint in malloc_error_break to debug **************

This is caused by missing sass files. Be sure you've done a bower install before gulp serve.

