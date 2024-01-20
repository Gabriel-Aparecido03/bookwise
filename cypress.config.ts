import { defineConfig } from 'cypress'
import { plugins } from 'cypress-social-logins'

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e : {
    baseUrl : 'http://localhost:3000/',
    supportFile : false,
    chromeWebSecurity : false,
    setupNodeEvents(on, config) {
      on("task", { GoogleSocialLogin : plugins.GoogleSocialLogin })
    },
    defaultCommandTimeout : 20000
  },
})