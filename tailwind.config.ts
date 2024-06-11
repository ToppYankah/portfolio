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
      backgroundColor: {
        inverted: 'var(--foreground-hex)',
        color: 'var(--background-hex)',
      },
      backgroundOpacity: {
        10: '0.1',
      },
      borderColor: {
        inverted: 'var(--foreground-hex)',
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ]
} satisfies Config;
