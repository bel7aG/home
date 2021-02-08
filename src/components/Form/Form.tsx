import { FC } from 'react'
import { SForm } from './SForm'
import { Form as FinalForm } from 'react-final-form'

interface FormProps {
  handleForm: (values: any) => void
  validation: (formValues: any) => object
  initialValues?: any
  decorators?: any[]
}

const Form: FC<FormProps> = ({ children, initialValues, handleForm, validation, decorators }) => (
  <FinalForm
    decorators={decorators}
    onSubmit={handleForm}
    initialValues={initialValues}
    validate={validation}
    render={({ handleSubmit }) => (
      <SForm>
        <form onSubmit={handleSubmit}>{children}</form>
      </SForm>
    )}
  />
)

export default Form
