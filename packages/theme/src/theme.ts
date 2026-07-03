import { defineTheme } from '@astryxdesign/core/theme';

export const scentre = defineTheme({
  name: "scentre",
  color: { accent: "#FF1C33" },
  tokens: {
    // Explicit overrides take precedence over scale-generated values
    // "--color-accent": ["#EBC3FF", "#BD60FF"],
  },
  components: {
    button: {
      // base: { backgroundColor: "#FF5500" },
    },
  },
});
