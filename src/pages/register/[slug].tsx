import { useState, useEffect, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { Field } from 'react-final-form'
import { createPersistDecorator } from 'final-form-persist'

import { blockState } from 'shared'
import { useRouter, useRegister } from 'context'
import { RegisterStepper, RegisterContent } from 'containers'
import { Form } from 'components'
import { registerValidation } from 'validations'
import { REGISTER_FORM_ROUTES } from 'constant'
import { IRegister } from 'interfaces'

interface RegisterProps {
  slug: string
  portal: any
}

const Register: NextPage<RegisterProps> = ({ ...props }) => {
  const { portal, slug } = props

  const router = useRouter()

  const { handleRegister } = useRegister()

  const [forward, setForward] = useState(false)

  const currentRoute = useMemo(() => REGISTER_FORM_ROUTES.find((route) => route.slug === slug), [slug])

  const { persistDecorator, clear } = createPersistDecorator({
    name: 'registerForm',
    debounceTime: 500,
    whitelist: REGISTER_FORM_ROUTES.map(({ slug }) => slug),
    storage: localStorage
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

  const chosenRoute = useMemo(() => REGISTER_FORM_ROUTES.find((route) => route.slug === slug), [slug])

  useEffect(() => {
    const item = localStorage.getItem('registerForm') as any
    console.log(item)
    if (item) {
      const form = JSON.parse(item)
      if (slug === chosenRoute?.slug && chosenRoute.previous !== null && form[chosenRoute.previous.slug] === undefined)
        router.push(`/register/${chosenRoute.previous?.slug}`)
    } else if (slug !== REGISTER_FORM_ROUTES[0].slug) {
      router.push(REGISTER_FORM_ROUTES[0].slug)
    }
  }, [slug])

  const handleForm = (input: IRegister) => {
    handleRegister(input)
    clear()
    router.push('/results')
  }

  return (
    <>
      <RegisterStepper slug={slug} handleNext={handleNext} handlePrevious={handlePrevious} forward={forward} />
      <RegisterContent blockState={blockState} portal={portal}>
        <Form
          decorators={persistDecorator ? [persistDecorator] : []}
          validation={registerValidation}
          handleForm={handleForm}>
          {chosenRoute && slug !== 'salary' && <Field name={slug} component="input" placeholder={`${slug}...`} />}
          {chosenRoute && slug === 'salary' && (
            <>
              <div>
                <p>0 - 1000</p>
                <Field name={slug} type="radio" value="0 - 1000" component="input" />
              </div>
              <div>
                <p>1000 - 2000</p>
                <Field name={slug} type="radio" value="1000 - 2000" component="input" />
              </div>
              <div>
                <p>2000 - 3000</p>
                <Field name={slug} type="radio" value="2000 - 3000" component="input" />
              </div>
              <div>
                <p>3000 - 4000</p>
                <Field name={slug} type="radio" value="3000 - 4000" component="input" />
              </div>
              <div>
                <p>Mehr als 4.000</p>
                <Field name={slug} type="radio" value="Mehr als 4.000" component="input" />
              </div>
            </>
          )}
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
