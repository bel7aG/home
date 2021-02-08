import { useState, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'

import { Head } from 'shared'
import { RegisterStepper } from 'containers'
import { useRouter } from 'context'
import { Block, HTMLWrapper } from 'components'
import { REGISTER_FORM_ROUTES } from 'constant'
import { IBlockState } from 'interfaces'

interface RegisterProps {
  slug: string
  portal: any
  blockState: IBlockState
}

const Register: NextPage<RegisterProps> = (props) => {
  const { portal, blockState, slug } = props
  const router = useRouter()

  const [forward, setForward] = useState(false)

  const currentRoute = useMemo(() => REGISTER_FORM_ROUTES.find((route) => route.slug === slug), [slug])

  const handleNext = () => {
    if (currentRoute?.next && forward === false) {
      setForward(true)
      setTimeout(() => {
        setForward(false)
        router.push(currentRoute.next?.pathname)
      }, 450)
    }
  }

  const handlePrevious = () => {
    if (currentRoute?.previous && forward === false) {
      setForward(true)
      setTimeout(() => {
        setForward(false)
        router.push(currentRoute.previous?.pathname)
      }, 450)
    }
  }

  return (
    <>
      <Head pageTitle="REGISTER" />

      <RegisterStepper slug={slug} handleNext={handleNext} handlePrevious={handlePrevious} forward={forward} />

      <Block blockState={blockState} factor={0} offset={0}>
        <HTMLWrapper portal={portal}>
          <div>
            <h1>this is content</h1>
          </div>
        </HTMLWrapper>
      </Block>
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
