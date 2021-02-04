import { useState, useEffect, useRef, useMemo, Suspense, FC, RefObject } from 'react'
import dynamic from 'next/dynamic'
import { useFrame } from 'react-three-fiber'
import { animated, useSpring } from '@react-spring/three'
import * as easings from 'd3-ease'

import { useMobileDetect } from 'hooks'
import { Particles, Text } from 'components'

const House = dynamic(() => import('./House'), { ssr: false })

const Game: FC = () => {
  const groupRef = useRef<any>() as RefObject<any>

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
    scale: active ? [0.4, 0.4, 0.4] : ready ? [1, 1, 1] : [0, 0, 0],

    config: { duration: 1700, easing: easings.easeCubic }
  })

  const handleHouse = () => setActive(!active)

  return (
    <animated.group ref={groupRef} scale={houseScale as any} onPointerDown={handleHouse}>
      <group>
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
            <Text color="#ff556b" hAlign="center" position={[0, 1, 0]} children="HOME" />
            <Text color="#ff556b" hAlign="right" position={[0, -1, 0]} children="HT" />
          </group>
          <Particles color="#000" count={isMobile ? 2000 : 8500} />
          <House isActive={active} />
        </Suspense>
      </group>
    </animated.group>
  )
}

export default Game
