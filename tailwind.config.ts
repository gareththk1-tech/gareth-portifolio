import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  corePlugins: {
    preflight: false, // prevents conflicts with Once UI base styles
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
