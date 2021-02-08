import { FC, ReactNode } from 'react'
import { Canvas as ThreeFiberCanvas } from 'react-three-fiber'

import { CameraControls, Lights } from 'components'

export interface CanvasProps {
  children: ReactNode
}

const Canvas: FC<CanvasProps> = ({ children }) => {
  return (
    <ThreeFiberCanvas colorManagement camera={{ position: [0, 18, 23] }}>
      <CameraControls />
      <Lights />
      {children}
    </ThreeFiberCanvas>
  )
}

export default Canvas
