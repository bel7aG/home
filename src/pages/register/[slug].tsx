import { useEffect, useState, useMemo, Suspense } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { animated, useSpring } from '@react-spring/three'
import * as easings from 'd3-ease'

import { REGISTER_FORM_ROUTES } from 'constant'
import { useRouter } from 'context'
import { Box } from 'components'
import { Head } from 'shared'

const Text = dynamic(import('../../components/WebGL/Text'))
import { useThree } from 'react-three-fiber'

interface RegisterProps {
  slug: string
}

const Register: NextPage<RegisterProps> = (props) => {
  const { slug } = props
  const router = useRouter()

  const [forward, setForward] = useState(false)

  const { viewport } = useThree()

  const [{ pos: slugPosition }, animate] = useSpring(
    {
      to: {
        pos: [0, 30, 0]
      },
      from: {
        pos: [0, 30, 0]
      },
      config: { duration: 600, easing: easings.easeCubic }
    },
    []
  )

  useEffect(() => {
    animate({ to: { pos: [0, 10, 0] }, from: { pos: [0, 30, 0] }, reverse: forward })
  }, [forward])

  const { scale: boxScale } = useSpring({
    to: {
      scale: [1, 1, 1]
    },
    from: {
      scale: [0, 0, 0]
    },
    config: { duration: 600, easing: easings.easeCubic }
  })

  const currentRoute = useMemo(() => REGISTER_FORM_ROUTES.find((route) => route.slug === slug), [slug])

  const handleNext = () => {
    if (currentRoute?.next) {
      setForward(true)
      setTimeout(() => {
        setForward(false)
        router.push(currentRoute.next?.pathname)
      }, 600)
    }
  }

  const handlePrevious = () => {
    if (currentRoute?.previous) {
      setForward(true)
      setTimeout(() => {
        setForward(false)
        router.push(currentRoute.previous?.pathname)
      }, 600)
    }
  }

  return (
    <>
      <Head pageTitle="REGISTER" />
      <mesh position={[0, 0, -4]}>
        <animated.group position={slugPosition as any} scale={[1, 1, 1]}>
          <Suspense fallback={null}>
            <Text hAlign="center" children={slug} />
          </Suspense>
        </animated.group>

        <animated.group
          rotation={[-1, 0, 0]}
          position={[viewport.width / 2 - 7, -3.7, 15]}
          onPointerDown={forward === false ? handleNext : () => {}}
          scale={boxScale as any}>
          {currentRoute?.next && (
            <Suspense fallback={null}>
              <Box scale={[3, 3, 3]} position={[3, 0, -3]} color="#0bc5bc" />

              <Text size={15} hAlign="center" children="NEXT" color="#0bc5bc" />
            </Suspense>
          )}
        </animated.group>

        <animated.group
          rotation={[-1, 0, 0]}
          position={[-viewport.width / 2, -3.7, 15]}
          onPointerDown={forward === false ? handlePrevious : () => {}}
          scale={boxScale as any}>
          {currentRoute?.previous && (
            <Suspense fallback={null}>
              <Box scale={[3, 3, 3]} position={[3, 0, -3]} color="#0bc5bc" />

              <Text size={15} hAlign="center" children="PREVIOUS" color="#0bc5bc" />
            </Suspense>
          )}
        </animated.group>
      </mesh>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as { slug: string }
  return {
    props: {
      slug
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: REGISTER_FORM_ROUTES.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}

export default Register
