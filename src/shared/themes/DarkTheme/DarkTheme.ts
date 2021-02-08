import { Bel7aGTheme } from 'styled-components'

export const DarkTheme: Bel7aGTheme = {
  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`,
    secondary: `rgba(84, 89, 95, ${opacity})`
  }),

  layout: {
    colors: {
      body:
        'radial-gradient(circle, #0b362b, #09372b, #07372b, #06382b, #04382b, #033629, #023528, #013326, #012e23, #012a20, #01251c, #002119)',
      text: '#ffffff',
      textOpposite: '#262626'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type DarkTheme = typeof DarkTheme
