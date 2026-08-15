import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#5d4201",
        "inverse-primary": "#aec7f6",
        "on-error-container": "#93000a",
        "on-secondary-fixed": "#261900",
        "on-background": "#1b1c1c",
        "tertiary-fixed-dim": "#c7c6c4",
        "primary-container": "#002147",
        "outline-variant": "#c4c6cf",
        "surface-container-low": "#f6f3f2",
        "surface-tint": "#465f88",
        "on-surface": "#1b1c1c",
        "error-container": "#ffdad6",
        "surface-container-high": "#eae8e7",
        "on-primary": "#ffffff",
        "primary": "#000a1e",
        "surface-dim": "#dcd9d9",
        "error": "#ba1a1a",
        "on-surface-variant": "#44474e",
        "on-secondary-container": "#785a1a",
        "surface-variant": "#e4e2e1",
        "on-error": "#ffffff",
        "tertiary-container": "#202220",
        "tertiary-fixed": "#e3e2e0",
        "inverse-surface": "#303030",
        "secondary-container": "#fed488",
        "surface-bright": "#fbf9f8",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#f0eded",
        "surface-container-highest": "#e4e2e1",
        "on-tertiary": "#ffffff",
        "on-primary-fixed": "#001b3d",
        "inverse-on-surface": "#f3f0f0",
        "background": "#fbf9f8",
        "secondary": "#775a19",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#e9c176",
        "on-tertiary-container": "#898987",
        "secondary-fixed": "#ffdea5",
        "primary-fixed": "#d6e3ff",
        "on-primary-fixed-variant": "#2d476f",
        "surface": "#fbf9f8",
        "on-tertiary-fixed": "#1a1c1a",
        "tertiary": "#0a0b0a",
        "primary-fixed-dim": "#aec7f6",
        "on-primary-container": "#708ab5",
        "on-tertiary-fixed-variant": "#464745",
        "outline": "#74777f"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "unit": "8px",
        "stack-sm": "16px",
        "stack-md": "32px",
        "container-max": "1200px",
        "section-padding": "80px",
        "gutter": "24px",
        "stack-lg": "48px"
      },
      fontFamily: {
        "h1": ["Newsreader", "serif"],
        "body-md": ["Plus Jakarta Sans", "Public Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "Public Sans", "sans-serif"],
        "h3": ["Newsreader", "serif"],
        "quote": ["Newsreader", "serif"],
        "h2": ["Newsreader", "serif"],
        "label-caps": ["Plus Jakarta Sans", "Public Sans", "sans-serif"]
      },
      fontSize: {
        "h1": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "h3": ["28px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        "quote": ["24px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "h2": ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }]
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
};

export default config;
