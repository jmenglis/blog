import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Crimson Text", "Times New Roman", "serif"],
  bodyColor: "rgb(74, 74, 74)",
  headerColor: "rgb(54, 54, 54)",
  bodyFontFamily: [
    "Montserrat",
    "Helevtica Neue",
    "Helevtica",
    "Arial",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: "Crimson Text",
      styles: ["400", "700"],
    },
    {
      name: "Montserrat",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontWeight: 300,
    },
  }),
})
export default typography
