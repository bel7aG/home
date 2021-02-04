import { ReactNode, FC } from 'react'
import { ThemeProvider } from './theme-context'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => <ThemeProvider>{children}</ThemeProvider>
