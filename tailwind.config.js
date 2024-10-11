export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "punk-background": "#111113",
        "punk-surface": "#1E1E1E",
        "punk-primary": "#efefef",
        "punk-secondary": "#d3fbd8",
        "punk-accent": "#00c6c2",
        "punk-text": "#FFFFFF",
        "punk-text-secondary": "#BDBDBD",
      },
      fontFamily: {
        grotesk: ["Square Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
