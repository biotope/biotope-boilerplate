## Installing CLI
We recommend to use `npx` which will execute out of a temp folder

### Global installation
Install the cli with `npm install -g @biotope/cli`

Usage: `biotope <command>`

### Local installation
Add it to your project with `npm install --save-dev @biotope/cli`
Make it available with an npm script in your `package.json`
```
{
  ....
  "scripts": {
    ...
    "cli": "biotope"
    ...
  },
  ....
}

```

Usage: `npm run cli <command>`

## Init new Project
Using this command will clone the latest version of `biotope/biotope-boilerplate` and remove the git folder.
```
npx @biotope/cli init <your-project-name>
```

## Generate new component
Using this command will generate a new scaffold for a component, it will guide you through your component name and everything else.
```
npx @biotope/cli generate
```
