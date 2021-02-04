import { FC, ReactNode } from 'react'
import { Bel7aGTheme } from 'styled-components'

import { Canvas } from 'components'
import { SLayout } from './SLayout'

export interface LayoutProps {
  children: ReactNode
  triggerTheme?: (theme: Bel7aGTheme) => void
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SLayout>
      <Canvas>{children}</Canvas>
    </SLayout>
  )
}

export default Layout
