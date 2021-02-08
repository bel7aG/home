import { useEffect, useMemo, Suspense, FC } from 'react'
import dynamic from 'next/dynamic'
import { useThree } from 'react-three-fiber'
import { animated, useSpring } from '@react-spring/three'
import * as easings from 'd3-ease'

import { Box } from 'components'
import { REGISTER_FORM_ROUTES } from 'constant'

const Text = dynamic(import('../../components/WebGL/Text'))

interface RegisterStepperProps {
  slug: string
  handleNext: () => void
  handlePrevious: () => void
  forward: boolean
}

const RegisterStepper: FC<RegisterStepperProps> = ({ handleNext, handlePrevious, ...props }) => {
  const { slug, forward } = props

  const { viewport } = useThree()

  const [{ pos: slugPosition }, animate] = useSpring(
    {
      to: { pos: [0, viewport.height / 3, 0] },
      from: { pos: [0, viewport.height / 2.2, 0] },
      config: { duration: 600, easing: easings.easeCubic }
    },
    []
  )

  useEffect(() => {
    animate({
      to: { pos: [0, viewport.height / 3, 0] },
      from: { pos: [0, viewport.height / 2.2, 0] },
      reverse: forward
    })
  }, [forward])

  const currentRoute = useMemo(() => REGISTER_FORM_ROUTES.find((route) => route.slug === slug), [slug])

  const { scale: nextBoxScale } = useSpring({
    to: {
      scale: currentRoute?.next ? [1, 1, 1] : [0, 0, 0]
    },
    from: {
      scale: [0, 0, 0]
    },
    config: { duration: 300, easing: easings.easeCubic }
  })

  const { scale: previousBoxScale } = useSpring({
    to: {
      scale: currentRoute?.previous ? [1, 1, 1] : [0, 0, 0]
    },
    from: {
      scale: [0, 0, 0]
    },
    config: { duration: 300, easing: easings.easeCubic }
  })

  return (
    <group position={[0, 0, -4]}>
      <animated.group position={slugPosition as any} scale={[1, 1, 1]}>
        <Suspense fallback={null}>
          <Text hAlign="center" children={slug} />
        </Suspense>
      </animated.group>

      <animated.group
        rotation={[-1, 0, 0]}
        position={[viewport.width / 2.8, -viewport.height / 3, 17]}
        onPointerDown={handleNext}
        scale={nextBoxScale as any}>
        <Box scale={[4, 4, 4]} position={[1, 1, -3]} color="#3ad346" />
        <Suspense fallback={null}>
          <Text size={20} hAlign="center" children="NEXT" color="#009c0d" />
        </Suspense>
      </animated.group>

      <animated.group
        rotation={[-1, 0, 0]}
        position={[-viewport.width / 2.8, -viewport.height / 3, 17]}
        onPointerDown={handlePrevious}
        scale={previousBoxScale as any}>
        <Box scale={[4, 4, 4]} position={[-1, 1, -3]} color="#db6b6b" />
        <Suspense fallback={null}>
          <Text size={20} hAlign="center" children="PREVIOUS" color="#ff6d6d" />
        </Suspense>
      </animated.group>
    </group>
  )
}

export default RegisterStepper
