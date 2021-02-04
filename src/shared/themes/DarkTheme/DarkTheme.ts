import { Bel7aGTheme } from 'styled-components'

export const DarkTheme: Bel7aGTheme = {
  border: {
    wsc: `1px solid #000`,
    color: '#000',
    radius: '4px'
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`,
    secondary: `rgba(84, 89, 95, ${opacity})`
  }),

  layout: {
    colors: {
      cover: '#181818',
      body: '#181818',
      header: '#1F1F1F',
      text: '#fff',
      textOpposite: '#1F1F1F'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type DarkTheme = typeof DarkTheme
