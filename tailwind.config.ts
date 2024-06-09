import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex)", ...fontFamily.sans],
        serif: ["var(--font-copyright)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
