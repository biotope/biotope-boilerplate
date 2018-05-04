# Web Component PoC

## General order of execution

1. Web Components Polyfill (once global) 
2. Register Component 
3. Update State (by Attributes / JSON-LD / Fetch API / Headless CMS & SPA) 
4. Render Component 


## Scenarios

### Custom Component with State

`path/to/script/index.js` contains Web Component that registers to 'customElements' (BiotopeComponent) and registers component to the store (core/registerComponent).
State is updated by Attributes / JSON-LD / Fetch API / Headless CMS & SPA. Afterwards the Component is rendered

```
<custom-component data-loader="path/to/script/index.js"></custom-component>
```



### Custom Component with Attributes

`path/to/script/custom-component.js` contains Web Component that registers to 'customElements' (BiotopeComponent) and loads attributes directly from attribute observer

```
<custom-component name="Teo" title="Some headline" data-loader="path/to/script/custom-component.js"></custom-component>
```



### Custom Component -> SPA

Data and data type is loaded from an API (e.g. Headless CMS). Custom component is mapped to the data type and injected by SPA.
In this scenario it is the same scenario as `Custom Component with State` (see above). Except that the state is set before injection of custom-component.

Maybe the script `path/to/script/index.js` is also preloaded by the SPA?! 



### Custom Component -> Prerendered CMS

`path/to/script/rehydrate.js` contains the Rehydrate Plugin and a configuration that is needed to extract the data from prerendered markup to the state. 
It also contains the Web Component that registers to 'customElements' (BiotopeComponent) and loads attributes directly from the state after rehydration process

```
<custom-component data-loader="path/to/script/rehydrate.js"></custom-component>
```


### Custom Component with JSON-LD

`path/to/script/custom-component.js` contains Web Component that registers to 'customElements' (BiotopeComponent) and loads attributes from JSON LD script

```
<script type="application/ld+json" id="unique-id-123">
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Steve Jobs",
  "image": "https://cdn.macrumors.com/article-new/2017/10/steve-jobs-800x533.jpg"
}
</script>
<custom-component data-json-ld="unique-id-123" data-loader="path/to/script/custom-component.js"></custom-component>
```


## Possible helper functions/extensions/libraries

### Web Components Loader

Like our existing conditional loader. But this loader responds to the official Web Components Polyfill library and loads the scripts as soon as possible.
In the examples above it is triggered by `data-loader` attribute.

### BiotopeComponent

This is a class extension that adds additional store logic to a web component. It extends the HTMLElement.

### Component Registering

This function registers the component to the global `biotope.store`  

### Biotope Rehydrate

This plugin takes 


**The following helpers need to be discussed...** 

### JSON-LD Helper

Loads data directly from linked JSON-LD script into web components attributes or to the state

