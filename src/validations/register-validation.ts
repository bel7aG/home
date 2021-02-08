export const registerValidation = (formValues: any) => {
  const errors: any = {}

  let requiredFields = ['fullname', 'email', 'phone', 'salary']

  requiredFields.forEach((field) => {
    if (!formValues[`${field}`]) {
      errors[field] = `${field} is missing`
    }
  })

  return errors
}
