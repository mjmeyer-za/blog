import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    body: {
      background: '#cdbfd8',
    },
    a: {
      color: '#804a87',
    },
    'h1, h2, h3, h4, h5, h6, strong': {
      color: '#1d0a20',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    '.gatsby-resp-image-image': {
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
