export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    transitionProperty: {
      sheet: "transform, opacity",
      motion: "transform, opacity",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
    },
  },
};
export const plugins = [];
