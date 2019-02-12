Folder where the entry points for the application are. Each `ts`/`js` file represents one page for
the application and will be compiled seperately, resulting in different pages having different
scripts to import.

Each entry-point has to be registered on the `biotope-build.config.ts` file. If you only use one
entry point, then you don't need to add any configuration.

In an SPA, you should only have a single `ts`/`js` file in this folder. Don't forget to run your
server using the `--spa` option.
