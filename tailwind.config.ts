
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: "#0B0F19",
        surface: "#111827",
        sidebar: "#0F1623",
        brand: {
          DEFAULT: "#6366F1",
          hover: "#4F46E5",
        },
        accent: "#9333EA",
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
}

export default config;
