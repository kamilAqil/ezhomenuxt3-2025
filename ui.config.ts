export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "primary",
    gray: "surface",
    tokens: {
      background: "background", // your custom white
      color: "text", // dark neutral
      surface: "surface", // light gray
    },
  },
});
