import baseStyled, {
  Bel7aGTheme,
  ThemedStyledInterface,
  css as StyledCSS,
  keyframes as frames
} from 'styled-components'

declare module 'styled-components' {
  export interface Bel7aGTheme {
    border: {
      wsc: string // width style color
      color: string
      radius: string
    }

    colors: (
      opacity?: number
    ) => {
      primary: string
      secondary: string
    }

    layout: {
      colors: {
        cover: string
        body: string
        header: string
        text: string
        textOpposite: string
      }
    }

    transition: string
  }
}

export const styled = baseStyled as ThemedStyledInterface<Bel7aGTheme>
export const css = StyledCSS
export const keyframes: Bel7aGTheme | any = frames
