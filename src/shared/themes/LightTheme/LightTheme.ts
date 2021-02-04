import { Bel7aGTheme } from 'styled-components'

export const LightTheme: Bel7aGTheme = {
  border: {
    wsc: `1px solid #dbdbdb`,
    color: '#dbdbdb',
    radius: '4px'
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`,
    secondary: `rgba(84, 89, 95, ${opacity})`
  }),

  layout: {
    colors: {
      cover: '#fff',
      body: '#fafafa',
      header: '#fff',
      text: '#262626',
      textOpposite: '#fff'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type LightTheme = typeof LightTheme
