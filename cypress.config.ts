import { defineConfig } from "cypress";
import { basename } from "path";

export default defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
