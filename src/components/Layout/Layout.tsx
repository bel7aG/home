import { Children, isValidElement, cloneElement, useState, useRef, createRef, FC, ReactNode, RefObject } from 'react'
import { DomEventHandlers } from 'react-three-fiber'
import { Bel7aGTheme } from 'styled-components'
import { useRouter } from 'next/router'

import { Canvas, Game } from 'components'
import { IBlockState } from 'interfaces'
import { SLayout } from './SLayout'

export const blockState: IBlockState = {
  sections: 2,
  pages: 1,
  zoom: 1,
  top: createRef()
}

export interface LayoutProps {
  children: ReactNode
  triggerTheme?: (theme: Bel7aGTheme) => void
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<any>() as RefObject<any>
  const domContent = useRef<any>() as RefObject<any>
  const { pathname } = useRouter()
  const [events, setEvents] = useState<DomEventHandlers>()
  const onScroll = (e: any) => (blockState.top.current = e.target.scrollTop)

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { portal: domContent, blockState })
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
        {childrenWithProps}
      </Canvas>

      <div ref={scrollRef} onScroll={onScroll} {...events}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${blockState.pages * 100}vh` }} />
      </div>
    </SLayout>
  )
}

export default Layout
