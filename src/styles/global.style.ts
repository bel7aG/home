import { createGlobalStyle, Bel7aGTheme } from 'styled-components'
import { SCREEN } from 'constant'

export const GlobalStyle = createGlobalStyle<{ theme: Bel7aGTheme }>`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: ${({ theme }) => theme?.colors(0.3)?.secondary};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme?.colors(0.3)?.secondary};
  }

  *::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  a, a:visited, a:link {
    text-decoration: none;
  }


  h1, h2, h3, h4, h5, h6, p, strong, small {
    color: ${({ theme }) => theme?.layout?.colors?.text};
  }

  html {
    overflow-x: hidden;
    padding-top: 0 !important;
    font-size: 62.5% !important;
    scroll-behavior: smooth;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body, html {
    overflow-x: hidden;
  }

  body {
    background: ${({ theme }) => theme?.layout?.colors?.body};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
    margin: 0;
    height: 100vh !important;
    font-size: 1.6rem;
    overflow-x: hidden;
    overflow-y: scroll;    

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    font-kerning: normal;

  }

  button {
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  input {
    outline: none;
    border: 0;
  }

  li, ol {
    list-style: none;
  }

  @media screen and (min-width: ${SCREEN.MOBILE}px) {
    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: ${SCREEN.MOBILE}px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  span
  p {
    color: ${({ theme }) => theme?.layout?.colors?.text};
  }

  a {
    color: inherit;
  }

`
