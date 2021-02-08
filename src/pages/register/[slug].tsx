import { useState, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { Field } from 'react-final-form'
import { createPersistDecorator } from 'final-form-persist'

import { Head } from 'shared'
import { useRouter } from 'context'
import { RegisterStepper, RegisterContent } from 'containers'
import { Form } from 'components'
import { registerValidation } from 'validations'
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

  const { persistDecorator, clear } = createPersistDecorator({
    name: 'registerForm',
    debounceTime: 500,
    whitelist: REGISTER_FORM_ROUTES.map(({ slug }) => slug)
  })

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

  const handleForm = () => {
    clear()
  }

  const chosenRoute = useMemo(() => REGISTER_FORM_ROUTES.find((route) => route.slug === slug), [slug])

  return (
    <>
      <Head pageTitle="REGISTER" />

      <RegisterStepper slug={slug} handleNext={handleNext} handlePrevious={handlePrevious} forward={forward} />
      <RegisterContent blockState={blockState} portal={portal}>
        <Form decorators={[persistDecorator]} validation={registerValidation} handleForm={handleForm}>
          {chosenRoute && <Field name={slug} component="input" />}
          {chosenRoute?.next === null && <button type="submit">Register</button>}
        </Form>
      </RegisterContent>
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
