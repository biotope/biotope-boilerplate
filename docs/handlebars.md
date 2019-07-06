## HBS JSON Scoping
Biotope comes with Handlebars for templating and demonstrating different component scenarios.

JSON scoping follows some rules, so here we go: the path of your JSON is added to the data object. The path will be camelcased, spaces will be removed.
An example:
```
src/components/XButton/scaffolding/XButtonData.json
will be available here:
data.components.xButton.scaffolding.xButtonData
```

## Handlebar Helpers
* `{{> partial}}` - include a handlebars partial. Partials are automatically created from components and partial folders. The partials can be *.hbs or *.html. Example: For the file components/foldername/handlebarsfile.html use the partial identifier foldername/handlebarsfile.
* `{{bioInclude 'partial'}}` - custom partial helper, which will forward the scope other that the default inclusion, i.e. when you want to use your JSON data without passing it down, you want to use this helper.
* `{{bioDef variable 'default value'}}` - set a default value for a variable
* `{{bioText count max}}` - a filler text with a variable count of letters and an added variance (max)
* `{{bioImg width height src}}` - creates the image src path for generated assets. This helper only creates the path and the image itself. Example: {{bioImg 300 400 srcName.jpg}} gets to '_assets/generated/srcName_300x400.jpg'
* `{{#bioCompare left, operator, right, options}}` – block helper to compare two values (left, right) with a variable operator.
* `{{bioMath left, operator, right, options}}` – allows math operations between two values (left, right) and a variable operator. Example: {{bioMath 10 '+' 15}} returns 25
* `{{bioCode content}}` – defines a code block to allow curly brackets for other frameworks. Use with {{{{code}}}} {{{{/code}}}} (4 curly brackets for literal string contents)
* `{{bioStringify object}}` – Convert a JSON/JavaScript Object into a string for debugging
* `{{bioParseJSON data options}}` – block helper to parse a String to JSON for debugging

