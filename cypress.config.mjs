import { defineConfig } from "cypress";
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  projectId: 'eseafs',

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
});
