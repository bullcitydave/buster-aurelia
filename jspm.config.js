SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "buster-aurelia": {
      "main": "buster-aurelia.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
  },
  packages: {
    "npm:aurelia-polyfills@1.0.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    }
  }
});
