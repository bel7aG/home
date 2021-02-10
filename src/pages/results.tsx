import { useEffect, Suspense } from 'react'
import { NextPage } from 'next'
import { useThree } from 'react-three-fiber'
import { Html } from '@react-three/drei'

import { Head } from 'shared'
import { Block, Box, HTMLWrapper, Text } from 'components'
import { useRegister, useRouter } from 'context'
import { IRegister, IBlockState } from 'interfaces'
import { BackHome, SResults } from 'styles'

interface RegisterProps {
  slug: string
  portal: any
  blockState: IBlockState
}

const Register: NextPage<RegisterProps> = (props) => {
  const { portal, blockState } = props

  const {
    viewport: { width, height }
  } = useThree()

  const { values = {} } = useRegister()
  const router = useRouter()

  const { fullname, email, phone, salary } = values as IRegister

  useEffect(() => {
    // if (!fullname || !email || !phone || !salary) router.push('/')
  }, [])

  const handleBackHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head pageTitle="REGISTER" />
      <Block blockState={blockState} factor={0.5} offset={0}>
        <Suspense fallback={null}>
          <Text size={22} color="#ff556b" hAlign="center" position={[0, height / 3.2, 0]} children="congratulations" />
        </Suspense>
        <group position={[0, -height / 6, 0]}>
          <Box position={[-width / 2.5, height / 4, -3]} scale={[4, 4, 4]} color="#b4005a" />
          <Box position={[width / 2.5, height / 4, -3]} scale={[4, 4, 4]} color="#b4005a" />
        </group>
      </Block>
      <Block blockState={blockState} factor={0.5} offset={3}>
        <HTMLWrapper portal={portal}>
          <SResults>
            <h1>{fullname}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>salary: {salary}</h1>
          </SResults>
        </HTMLWrapper>
      </Block>

      <Block blockState={blockState} factor={0.6} offset={4}>
        <Box scale={[7, 7, 7]} color="#00b48d" />
        <Html center portal={portal}>
          <BackHome onClick={handleBackHome}>home</BackHome>
        </Html>
      </Block>
    </>
  )
}

export default Register
