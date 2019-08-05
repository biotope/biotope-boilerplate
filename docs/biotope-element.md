## Adding biotope element
Biotope element is installed per default on new projects. Adding it to existing biotope projects is simple as well.

1. `npm i @biotope/element`;
2. add types to import styles in TS files;
3. create a file called `types/global.d.ts`

### Example content for `types/global.d.ts`:
```
declare module '*.scss';
```

### The typescript config (`tsconfig.json`) should include these type roots
```
{
  ...
  "typeRoots": [
    "types",
    "node_modules/@types"
  ]
  ...
}

```
