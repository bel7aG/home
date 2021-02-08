import { FC, ReactNode } from 'react'
import { Bel7aGTheme } from 'styled-components'
import { useRouter } from 'next/router'

import { RouterContextProvider } from 'context'
import { Canvas, Game } from 'components'
import { SLayout } from './SLayout'

export interface LayoutProps {
  children: ReactNode
  triggerTheme?: (theme: Bel7aGTheme) => void
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <SLayout>
      <Canvas>
        <RouterContextProvider router={router as any}>
          <Game />
          {children}
        </RouterContextProvider>
      </Canvas>
    </SLayout>
  )
}

export default Layout
