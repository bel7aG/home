import { FC, ReactNode } from 'react'
import { Canvas as ThreeFiberCanvas } from 'react-three-fiber'

import { Lights } from 'components'

export interface CanvasProps {
  children: ReactNode
}

const Canvas: FC<CanvasProps> = ({ children }) => {
  return (
    <ThreeFiberCanvas colorManagement camera={{ position: [0, 20, 27.5] }}>
      <Lights />
      {children}
    </ThreeFiberCanvas>
  )
}

export default Canvas
