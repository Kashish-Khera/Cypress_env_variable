const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
          "url_in_cypress_config_js_file": "https://shop.demoqa.com/my-account/"
        }
  },
});
