import { createContext, useRef, useContext, FC, ReactNode, RefObject } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import lerp from 'lerp'

import { IBlockState } from 'interfaces'

const offsetContext = createContext(0)

interface BlockProps {
  children: ReactNode
  offset: number
  factor: number
  blockState: IBlockState
}

const Block: FC<BlockProps> = ({ children, offset, factor, blockState, ...props }) => {
  const blockRef = useRef<any>() as RefObject<any>
  const { offset: parentOffset, sectionHeight, aspect } = useBlock(blockState)
  offset = offset !== undefined ? offset : parentOffset

  useFrame(() => {
    if (blockRef.current) {
      const curY = blockRef.current.position.y
      const curTop = blockState.top.current / aspect
      blockRef.current.position.y = lerp(curY, (curTop / blockState.zoom) * factor, 0.06)
    }
  })

  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={blockRef}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}

const useBlock = (blockState: IBlockState) => {
  const { sections, pages, zoom } = blockState
  const { size, viewport } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth / zoom
  const canvasHeight = viewportHeight / zoom
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  const aspect = size.height / viewportHeight

  return {
    aspect,
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight
  }
}

export default Block
