import { useEffect, useRef, memo, FC, ReactNode, RefObject } from 'react'
import { Bel7aGTheme } from 'styled-components'

import { useTheme } from 'context'
import { SLayout } from './SLayout'

export interface LayoutProps {
  children: ReactNode
  triggerTheme: (theme: Bel7aGTheme) => void
}

const Layout: FC<LayoutProps> = ({ children, triggerTheme }) => {
  const layoutRef = useRef<HTMLDivElement | any>() as RefObject<HTMLDivElement>

  const { theme } = useTheme()

  useEffect(() => {
    triggerTheme(theme)
  }, [theme])

  return (
    <SLayout ref={layoutRef}>
      <main>{children}</main>
    </SLayout>
  )
}

export default memo(Layout)
