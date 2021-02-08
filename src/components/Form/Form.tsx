import { FC } from 'react'
import { SForm } from './SForm'
import { Form as FinalForm } from 'react-final-form'

interface FormProps {
  handleForm: (values: any) => Promise<void>
  validation: (formValues: any) => object
  initialValues?: any
}

const Form: FC<FormProps> = ({ children, initialValues, handleForm, validation }) => {
  return (
    <FinalForm
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
}

export default Form
