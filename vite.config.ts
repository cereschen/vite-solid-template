import { defineConfig } from "vite"
import babel from "@rollup/plugin-babel"
export default defineConfig({
  plugins: [babel({ babelHelpers: 'bundled', "extensions": ['jsx', 'tsx'] })],
  esbuild: {
    exclude: /\.(j|t)sx$/
  }
})