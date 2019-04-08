
![GitHub tag](https://img.shields.io/github/tag/biotope/biotope-boilerplate.svg) ![GitHub issues](https://img.shields.io/github/issues-raw/biotope/biotope-boilerplate.svg) ![GitHub PRs](https://img.shields.io/github/issues-pr-raw/biotope/biotope-boilerplate.svg) 
![GitHub](https://img.shields.io/github/license/biotope/biotope-boilerplate.svg) 
![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/biotope/biotope-boilerplate.svg)




# Biotope is a framework which enables you to develop scalabale, platform-agnostic frontend component ecosystems

## Definition Ecosystem vs. Ecosystem Framework:

- A component ecosystem is a pool of components which can be used in any combination to build your websites or web applications user interface. The same components can be used in 1-n projects.

- An ecosystem framework helps you building such an ecosystem and makes sure all components play well with each other, you get an overview over all components in the pooland information how to use them.

## It helps developers to:
- Build your UI components once and use them together with vanilla javascript or the js framework of your choice, in single page applications as well as in traditional server side rendered cms projects.
- Keep focus on developing components, the architecture and dev environment is provided by Biotope.
- Easy start, love to use it.
- Build projects and design system styleguides with a single code source. 
- Easily ensure high quality standards for the whole library even when developed by multiple suppliers.
- Make it easy to work with a team of many developers, all providing components to the library.
- Create your own ui library to choose from in your projects.


## It helps companies to:
- Create a UI component library which can be maintained in a central place.
- Versioning enables you to use all ui-components independently in different projects.
- Ensure a consistent UI across all your projects.
- Let multiple partners contribute to the ui library without compatiblity & quality issues. Bring their design system to live. Real usable code, no dummy html components in a seperate styleguide tool.
- Doesnt matter how big the component library gets. Projects only use components they need. So performance stays high.
- Maintain and extend the ui library over years to avoid getting out-of-date and having to start from scratch again.


## It helps designers to:
- Showcase their design systems in an always up to date living styleguide.
- Have a single point of truth for the components available how they work and how they look.


## Developing Biotope
- We keep focus on our vision.
- Our goal is to ensure things are interoperable between Biotope instances, beside that Biotope should be as flexible as possible.
- Instead of one monolythic framework we try to split up Biotope in lightweight services each with a dedicated goal.


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

## Development

run the boilerplate with `npm start`

### 1. Our helpers

* `{{> partial}}` - include a handlebars partial. Partials are automatically created from components and partial folders. The partials can be *.hbs or *.html. Example: For the file components/foldername/handlebarsfile.html use the partial identifier foldername/handlebarsfile.  
* `{{bioInclude 'partial'}}` - custom partial helper, allows the use of json data as files or a string 
* `{{bioDef variable 'default value'}}` - set a default value for a variable 
* `{{bioText count max}}` - a filler text with a variable count of letters and an added variance (max)
* `{{bioImg width height src}}` - creates the image src path for generated assets. This helper only creates the path and the image itself. Example: {{bioImg 300 400 srcName.jpg}} gets to '_assets/generated/srcName_300x400.jpg'
* `{{#bioCompare left, operator, right, options}}` – block helper to compare two values (left, right) with a variable operator.
* `{{bioMath left, operator, right, options}}` – allows math operations between two values (left, right) and a variable operator. Example: {{bioMath 10 '+' 15}} returns 25
* `{{bioCode content}}` – defines a code block to allow curly brackets for other frameworks. Use with {{{{code}}}} {{{{/code}}}} (4 curly brackets for literal string contents)
* `{{bioStringify object}}` – Convert a JSON/JavaScript Object into a string for debugging
* `{{bioParseJSON data options}}` – block helper to parse a String to JSON for debugging

Each intern helper from biotope-build is prefixed with 'bio'.
Each project specific helper should be prefixed with an abbreviation of the project/client. This leads to a better distinction and prevents from conflicts with variables.

### 2. Folder structure

* `/src` is where all of the actual frontend code is stored
* `/src/_assets` holds static placeholder files like images, audio- and video files.
* `/src/_mock` holds files that would be generated dynamically by the cms implementing the frontend and not explicitly corresponding to a component
* `/src/_config` holds the js configuration file
* `/src/pages` holds the base html files to create the index preview
* `/src/resources` holds global resources: JavaScript, TypeScript, SASS/CSS and other files
* `/src/components` holds reusable components and the corresponding resource files
* `/test` is where we put automated tests for Travis CI

## Testing

**Travis CI** Testing is used for automated boilerplate testing. It uses Mocha/Chai and checks the build process and compares the generated static files with there fixtures. To run the tests locally execute `mocha test/travis/build.js` from terminal. Install mocha globally.

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

## Troubleshooting

### Line-break errors in eslint

If there are line-break errors in eslint, it may be because false line endings set by git. Try to check out the repo again.
To prevent this check the git config "core.autocrlf". 

### gulp serve malloc error (Unix Only)

************** gulp(975,0x104c15000) malloc: *** error for object 0x10164201c: pointer being freed was not allocated *** set a breakpoint in malloc_error_break to debug **************

This is caused by missing sass files. Be sure you've done a bower install before `npm start`.

