import { useState, useEffect, useRef, useMemo, Suspense, FC, RefObject } from 'react'
import dynamic from 'next/dynamic'
import { useFrame, useThree } from 'react-three-fiber'
import { animated, useSpring } from '@react-spring/three'
import * as easings from 'd3-ease'

import { useMobileDetect } from 'hooks'
import { Particles, Text } from 'components'

const House = dynamic(() => import('./House'), { ssr: false })

const Game: FC = () => {
  const groupRef = useRef<any>() as RefObject<any>

  const { viewport } = useThree()
  const isMobile = useMemo(() => useMobileDetect().isMobile(), [])

  const [active, setActive] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  // Animate model
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime()
    groupRef.current.rotation.z = -0.2 - (1 + Math.sin(elapsedTime / 1.5)) / 20
    groupRef.current.rotation.x = Math.cos(elapsedTime / 4) / 8
    groupRef.current.position.y = (1 + Math.sin(elapsedTime / 1.5)) / 10
  })

  const { scale: houseScale } = useSpring({
    scale: active ? [0.6, 0.6, 0.6] : ready ? [1, 1, 1] : [0, 0, 0],

    config: { duration: 1700, easing: easings.easeCubic }
  })

  const handleHouse = () => setActive(!active)

  const { scale: registerScale, pos: registerPosition } = useSpring({
    scale: active ? [1, 1, 1] : [0, 0, 0],
    pos: active === false ? [0, viewport.height * 1.5, 0] : [0, viewport.height / 3.2, 0],
    config: { duration: 1800, easing: easings.easeCubic }
  })

  return (
    <group>
      <animated.group ref={groupRef} scale={houseScale as any} onPointerDown={handleHouse}>
        <group>
          <Suspense fallback={null}>
            <Particles color="#fff" count={isMobile ? 2000 : 8500} />
            <group position={[0, 10, 0]}>
              <Text color="#ff556b" hAlign="center" position={[0, 1, 0]} children="HOME" />
              <Text color="#ff556b" hAlign="right" position={[0, -1, 0]} children="HT" />
            </group>
            <House isActive={active} />
          </Suspense>
        </group>
      </animated.group>

      <animated.group position={registerPosition as any} scale={registerScale as any}>
        <Suspense fallback={null}>
          <Text children="REGISTER" />
        </Suspense>
      </animated.group>
    </group>
  )
}

export default Game
