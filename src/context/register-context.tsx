import { useState, useEffect, useContext, createContext, ReactNode, FC } from 'react'

import { useLocalStorage } from 'hooks'
import { IRegister } from 'interfaces'

interface RegisterProviderProps {
  children: ReactNode
}

interface RegisterContextType {
  values: IRegister | null
  handleRegister: (values?: IRegister) => void
}

const INITIAL_STATE: RegisterContextType = {
  values: {
    fullname: '',
    email: '',
    phone: '',
    salary: ''
  },
  handleRegister: () => undefined
}

const RegisterContext = createContext<RegisterContextType>(INITIAL_STATE)

export const RegisterProvider: FC<RegisterProviderProps> = ({ children }) => {
  const [currentRegister] = useLocalStorage(`registerForm`, '')

  const [values, setValues] = useState<IRegister | null>(INITIAL_STATE.values)

  const handleRegister = (input?: IRegister) => {
    setValues(input || currentRegister)
  }

  useEffect(() => {
    if (currentRegister) setValues(currentRegister)
  }, [])

  console.log('currentRegister')
  console.log(currentRegister)

  return <RegisterContext.Provider value={{ values, handleRegister }}>{children}</RegisterContext.Provider>
}

export const useRegister = () => useContext(RegisterContext)
