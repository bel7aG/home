import { FC, ReactNode } from 'react'
import { Canvas as ThreeFiberCanvas, CanvasProps as CanvasThreeProps } from 'react-three-fiber'
import { useRouter } from 'next/router'

import { RouterContextProvider } from 'context'
import { CameraControls, Lights } from 'components'

export interface CanvasProps extends CanvasThreeProps {
  children: ReactNode
}

const Canvas: FC<CanvasProps> = ({ children }) => {
  const router = useRouter()

  return (
    <ThreeFiberCanvas colorManagement camera={{ position: [0, 18, 23] }}>
      <RouterContextProvider router={router as any}>
        <CameraControls />
        <Lights />
        {children}
      </RouterContextProvider>
    </ThreeFiberCanvas>
  )
}

export default Canvas
