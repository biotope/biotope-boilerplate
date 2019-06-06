
## Setup

### 1. Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools. In fact node.js even runs a tiny webserver which will enable you to browse the components of the frontend.
**NPM** is the Node Package Manager and is used to install all packages.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.

> IMPORTANT NOTE ON PERMISSIONS: If you experience permission problems while installing Node.js (especially on Mac or Linux machines) never use `sudo` to install packages with `npm`
> Please ask your IT Admins to give you proper permissions or let them do the installation.
> See <https://docs.npmjs.com/getting-started/fixing-npm-permissions> for instructions.


## Starting

After your are finished with the step before and everything runs fine, run these steps to get your project on the road.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `npm install`
4. To
	* **start** the development environment run `npm start`
	* **build** the code for production use run `npm run build`

## Build

run the boilerplate with `npm run build`
If everything is correct, you will find a build version of your code in the **dist** directory.
This contains among others a min and concat version of your js and css files

## Release
There is a gulp task for doing releases. Use gulp release --type=[major,minor,patch,prerelease] will do the following steps for you:
1. update package.json version
2. git commit the changed package.json
3. git push
4. set a GIT tag for this version
5. coming soon: create a diff changelog from last version to this version

## Custom Configuration

How to set up your personal boilerplate, with dependencies you really need.

### projectConfig.json

This file lets you enable and disable certain tasks as well as specify additional resource folders.

__resource folders__
To add additional resource folders, create the folders and add the paths to the global.resources array.
The path needs to be prepended with a "/" and relative to the src folder.
The default resource folder is "/resources"

__component folders__
To add additional component folders, create the folders and add the paths to the global.components array.
The path needs to be prepended with a "/" and relative to the src folder.
The default components folder is "/components"
If an additinal component folder is added create an additional resource Folder since every components folder nees its own corresponding resource folder.

__tasks__
To disable certain tasks, simply set the specific task to false.
At the moment the tasks that can be disabled are: "linting", "iconfont", "handlebars", "uglify", "cleanCss", "favicons", "cssStats".
Per default all tasks are enabled.

__uglifyExceptions__
You can add files which should not be uglified during the uglify task (e.g. files that are already uglified)

__externalResources__
Add file paths of files that are needed for the build package. The path must be relative to each package inside node_modules.

## Patterns

We use different boilerplates to keep our code structure as homogeneous as possible.

### JavaScript / TypeScript

We also provide the possibility to compile to ES5 or ES6. Depending on the projects browser matrix.

### CSS / SASS

We compile the CSS stylesheets with a SASS compiler. We use the [BEM](http://getbem.com/naming/) methodology to ensure that the component based approach is also reflected in the css (sass) code we write.

### Folder structure

* `/src` is where all of the actual frontend code is stored
* `/src/_assets` holds static placeholder files like images, audio- and video files.
* `/src/_mock` holds files that would be generated dynamically by the cms implementing the frontend and not explicitly corresponding to a component
* `/src/_config` holds the js configuration file
* `/src/pages` holds the base html files to create the index preview
* `/src/resources` holds global resources: JavaScript, TypeScript, SASS/CSS and other files
* `/src/components` holds reusable components and the corresponding resource files
* `/test` is where we put automated tests for Travis CI
