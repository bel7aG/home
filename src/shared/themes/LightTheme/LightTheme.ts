import { Bel7aGTheme } from 'styled-components'

export const LightTheme: Bel7aGTheme = {
  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`,
    secondary: `rgba(84, 89, 95, ${opacity})`
  }),

  layout: {
    colors: {
      body:
        'radial-gradient(circle, #7ac455, #81cc5b, #88d561, #90dd68, #97e66e, #96eb6b, #96f068, #95f565, #8bf857, #7ffa46, #72fd32, #62ff12)',
      text: '#272224',
      textOpposite: '#ffffff'
    }
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type LightTheme = typeof LightTheme
