import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages, set base to "/<repo-name>/" and use HashRouter instead (see README).
export default defineConfig({
  plugins: [react()],
});
