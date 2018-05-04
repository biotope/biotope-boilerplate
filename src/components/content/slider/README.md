# Web Component PoC

## Scenarios

### Custom Component with Attributes

```
<custom-component name="Teo" title="Some headline" data-loader="path/to/script/index.js"></custom-component>
```

`path/to/script/index.js` contains Web Component that registers to 'customElements' (BiotopeComponent) and loads attributes directly from attribute observer


### Custom Component with State

```
<custom-component data-loader="path/to/script/index.js"></custom-component>
```

`path/to/script/index.js` contains Web Component that registers to 'customElements' (BiotopeComponent) and registers component to the store (core/registerComponent)




### Custom Component -> SPA

Data and data type is loaded from an API (e.g. Headless CMS). Custom component is mapped to the data type and injected by SPA 


### Custom Component -> Prerendered CMS


### Custom Component with JSON-LD
