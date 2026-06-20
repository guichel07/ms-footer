import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: "src/main.ts",
      output: {
        assetFileNames: "style.css",
      },
    },
  },
});
