import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  deps: { neverBundle: ["react"] },
  platform: "neutral",
})
