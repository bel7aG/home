import { useState, useContext, createContext, ReactNode, FC, useEffect } from 'react'

import { useLocalStorage } from 'hooks'
import { Bel7aGTheme } from 'styled-components'
import { LightTheme, DarkTheme } from 'shared'
import { THEMES } from '../constant'

interface ThemeProviderProps {
  children: ReactNode
}

// type for intial state

interface ThemeContextType {
  theme: Bel7aGTheme
  handleTheme: (name: string) => void
  themeName: string
}

const INITIAL_STATE: ThemeContextType = {
  theme: LightTheme,
  handleTheme: () => undefined,
  themeName: THEMES.LIGHT
}

const ThemeContext = createContext<ThemeContextType>(INITIAL_STATE)

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage(`theme`, '')

  const [theme, setTheme] = useState<Bel7aGTheme>(LightTheme)
  const [themeName, setThemeName] = useState<string>(THEMES.LIGHT)

  useEffect(() => {
    switch (currentTheme) {
      case THEMES.LIGHT:
        setTheme(LightTheme)
        setThemeName(THEMES.LIGHT)
        break

      case THEMES.DARK:
        setTheme(DarkTheme)
        setThemeName(THEMES.DARK)
        break

      default:
        break
    }
  }, [currentTheme])

  const handleTheme = (name: string) => {
    setCurrentTheme(name)
  }

  return <ThemeContext.Provider value={{ themeName, theme, handleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
