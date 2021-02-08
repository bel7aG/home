import { useState, useEffect, useMemo, useRef, FC, RefObject } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import * as easings from 'd3-ease'

import { useRouter } from 'context'

export const CameraControls: FC = () => {
  const controls = useRef<any>() as RefObject<any>

  const { camera, gl } = useThree()
  const { pathname } = useRouter()

  const [initialCameraPosition] = useState(() => ({ x: camera.position.x, y: camera.position.y, z: camera.position.z }))

  const spring = useMemo(
    () => ({
      from: {
        ...camera.position
      },
      to: {
        ...initialCameraPosition
      },
      config: { duration: 2500, easing: easings.easeCubic },
      onChange: ({ x, y, z }: any) => {
        camera.position.x = x
        camera.position.y = y
        camera.position.z = z
      }
    }),
    [pathname]
  )

  const [, setCamera] = useSpring(() => spring, [pathname])

  useEffect(() => {
    if (pathname !== '/') {
      setCamera(spring)
    }
  }, [pathname])

  useFrame(() => {
    controls.current.update()
  })

  return (
    <OrbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      enableZoom={false}
      enablePan={false}
      enableRotate={pathname === '/'}
    />
  )
}

export default CameraControls
