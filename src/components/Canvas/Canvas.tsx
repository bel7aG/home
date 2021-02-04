import { FC, ReactNode } from 'react'
import { Canvas as ThreeFiberCanvas } from 'react-three-fiber'
import { Bel7aGTheme } from 'styled-components'

export interface CanvasProps {
  children: ReactNode
  triggerTheme?: (theme: Bel7aGTheme) => void
}

const Canvas: FC<CanvasProps> = ({ children }) => {
  return (
    <ThreeFiberCanvas colorManagement camera={{ position: [0, 0, 0] }}>
      {children}
    </ThreeFiberCanvas>
  )
}

export default Canvas
