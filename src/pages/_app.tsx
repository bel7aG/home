import { useState, useEffect, FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider, Bel7aGTheme } from 'styled-components'

import { Head } from 'shared'
import Layout from 'components'
import { GlobalStyle } from 'styles'
import AppProviders from 'context'
import { LightTheme } from 'shared'

export function reportWebVitals(metric: any) {
  // The metric object ({ id, name, startTime, value, label }) is logged to the console
  if (process.env.NODE_ENV === 'development') if (metric.label === 'web-vital') console.log(metric)
}

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<Bel7aGTheme>(LightTheme)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  const triggerTheme = (theme: Bel7aGTheme) => {
    setTheme(theme)
  }

  return (
    <>
      <Head pageTitle="HOME" />

      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <AppProviders>
          <Layout triggerTheme={triggerTheme}>
            <Component {...pageProps} />
          </Layout>
        </AppProviders>
      </StyledThemeProvider>
    </>
  )
}

export default Application
