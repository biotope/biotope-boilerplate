/**
 * Collection of custom helpers
 * Grab helpers from: https://github.com/assemble/handlebars-helpers/tree/master/lib/helpers
 */
(((root, factory) => {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory;
  } else {
    factory(root.Handlebars);
  }
})(this, (handlebars) => {
  const helpers = {
    // Add helpers here
  };

  Object.keys(helpers).forEach((helper) => {
    handlebars.registerHelper(helper, helpers[helper]);
  });
}));
