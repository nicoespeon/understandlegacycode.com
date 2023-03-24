import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const colors = {
  white: "#fff",
  primary: "hsla(280, 85%, 55%, 1)",
  primaryLight: "hsla(280, 85%, 55%, 0.5)",
  background: "hsla(280, 85%, 65%, 0.25)",
  backgroundLightest: "hsla(280, 85%, 65%, 0.15)",

  firstAid: "hsla(354.6, 85.4%, 51.8%, 1)",
  firstAidLight: "hsla(354.6, 85.4%, 51.8%, 0.5)",
}
