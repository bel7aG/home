import { useState, useEffect, useRef, Children, isValidElement, cloneElement, FC, ReactNode, RefObject } from 'react'
import { DomEventHandlers } from 'react-three-fiber'
import { Bel7aGTheme } from 'styled-components'
import { useRouter } from 'next/router'

import { RegisterProvider, useTheme } from 'context'
import { Canvas, Game } from 'components'
import { SLayout } from './SLayout'
import { blockState } from 'shared'

export interface LayoutProps {
  children: ReactNode
  triggerTheme: (theme: Bel7aGTheme) => void
}

const Layout: FC<LayoutProps> = ({ triggerTheme, children }) => {
  const scrollRef = useRef<any>() as RefObject<any>
  const domContent = useRef<any>() as RefObject<any>

  const { pathname } = useRouter()
  const { theme, handleTheme } = useTheme()

  useEffect(() => {
    triggerTheme(theme)
  }, [theme])

  useEffect(() => void onScroll({ target: scrollRef.current }), [])

  const [events, setEvents] = useState<DomEventHandlers>()
  const onScroll = (e: any) => (blockState.top.current = e.target.scrollTop)

  const switchTheme = (themeName: string) => {
    handleTheme(themeName)
  }

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { portal: domContent, blockState, switchTheme: switchTheme })
    }
    return child
  })

  return (
    <SLayout pathname={pathname}>
      <Canvas
        onCreated={({ gl, events }) => {
          gl.toneMappingExposure = 2.5
          setEvents(events)
        }}>
        <Game />
        <RegisterProvider>{childrenWithProps}</RegisterProvider>
      </Canvas>

      <div className="scrollBar" ref={scrollRef} onScroll={onScroll} {...events}>
        <div style={{ position: 'sticky', top: '0px' }} ref={domContent} />
        <div style={{ height: `${blockState.pages * 100}vh` }} />
      </div>
    </SLayout>
  )
}

export default Layout
