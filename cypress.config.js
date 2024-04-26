const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here   
     
    },

    baseUrl: 'https://zitrus.com.br/',
    experimentalRunAllSpecs: true,
    retries: 0,
    env: { hideXhr: true},
    
  },

  viewportWidth: 1200,
  viewportHeight: 800
  
})
