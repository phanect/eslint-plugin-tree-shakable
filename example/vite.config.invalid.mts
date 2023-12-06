import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        invalid: resolve(__dirname, 'src/invalid.js'),
      },
    },
  },
});
