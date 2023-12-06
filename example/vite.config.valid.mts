import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        valid: resolve(__dirname, 'src/valid.js'),
      },
    },
  },
});
