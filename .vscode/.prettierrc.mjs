/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  experimentalTernaries: true,
  singleQuote: true,
  trailingComma: "es5",
  bracketSameLine: true,

  // prettier-plugin-astro config
  astroAllowShorthand: true,
};
