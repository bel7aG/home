import { FC, ReactNode } from 'react'
import { Canvas as ThreeFiberCanvas } from 'react-three-fiber'
import { EffectComposer, Vignette } from '@react-three/postprocessing'

import { CameraControls, Lights } from 'components'

export interface CanvasProps {
  children: ReactNode
}

const Canvas: FC<CanvasProps> = ({ children }) => {
  return (
    <ThreeFiberCanvas colorManagement camera={{ position: [0, 18, 23] }}>
      <CameraControls />
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Lights />
      </EffectComposer>
      {children}
    </ThreeFiberCanvas>
  )
}

export default Canvas
