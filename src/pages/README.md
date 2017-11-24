## Pages 

Pages are the base of all generated html files. 

### Filenames and types

Pages are always written as handlebar templates and use the extension `*.hbs`.
The filenames can be used to arrange the pages sort order for the main overview (generated index.html)

The filenames are structured like **\[2 digits\]\[category\].\[2 digits\]\[name\].hbs**
The first `2 digits` are use to set the sorting order of the categories. The `category` names the category. The first letter will be transformed to uppercase.
The second `2 digits` are use to set the sorting order of the pages. The `name` is only used for the destination filename and has no effect on the shown page title (see Page configuration below) 

### Page configuration

It consists of the page data (title, description) included via front matter YAML Syntax on top of the file. 
Front matter must always be on top of the file and is enclosed with `---` above and below the YAML configuration.

Mandatory properties are:
* title
* description

They are used to describe the page on the main overview (generated index.html).
It is possible to use these properties inside the partials via {{ data.frontMatter.\[your property\] }}

### Usage

The desired layout must be included with a hbs partial helper `{{> layout }}`. Usually this layout provides one or more variables for the content area(s).
Our examples use `contentMain` for the main content area. 

It is a good practice to set the path to a components scaffolding partial that is dynamically loaded into the content area. (See scaffolding readme) 

```html
{{> layouts/layout.default
	contentMain="components/framework/grid/grid"
	variableX="something custom for the component"
}}
```
