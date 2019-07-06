## Usage of Environment Variables
Biotope comes with two options to configure API Endpoints. One is the biotope configuration which is accessible on runtime and the other one is the usage of environment variables.
We advice you to use the biotope configuration if possible, because you can change these values on runtime. Environment variables on the other side have advantages to change stuff at built-time. E.g. you can set a DEBUG environment variable and log stuff in an if statement which then gets removed on minification.

```
....
if(DEBUG === 'true') {
  console.log('that special message');
}
....
```

On after minification the codeblock above is gone, because this code is *unreachable*.

### Setup environment variables

1. Install `cross-env` with `npm install --save-dev cross-env`
2. Update build and start script in `package.json` to use cross-env as follows:

```
{
  ....
  "scripts": {
    .....
    "start": "cross-env NODE_ENV=development gulp serve",
    "build": "cross-env NODE_ENV=production gulp build",
    ....
  },
  ....
}
```

3. Create two new files in the root of your project called `devvars.env` and `prodvars.env`

### Usage

Add a environment variable to the file. Note: you need to restart your process in order to make changes appear.

```devvars.env
MAPS_KEY=sometestkey
```



```prodvarss.env
MAPS_KEY=prodkeyforproject
```

Create a file or add a line to `types/global.d.ts`

```global.d.ts
....
declare var MAPS_KEY
....
```

Your JS/TS File
```map.ts
....
const api = `https://mapprovider.com/map?key=${MAPS_KEY}`
....
```



