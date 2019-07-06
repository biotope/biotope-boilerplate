## Adding biotope element
Biotope element is installed per default for new projects. Adding it to existing biotope projects is simple aswell.

`npm install --save @biotope/element`, add types to import styles in TS files, create a file called `types/global.d.ts`
Contents of this file:
```
declare module '*.scss';
```
The typescript config (`tsconfig.json`) should include these types like so:
```
{
	...
	"typeRoots": [
		"node_modules/@types", // note this line is not necessary
		"types"
	]
  ....
}

```
