import { FC } from 'react'

import { Block, HTMLWrapper } from 'components'
import { IBlockState } from 'interfaces'
import { SRegisterForm } from 'styles'

interface RegisterFormProps {
  portal: any
  blockState: IBlockState
}

const RegisterForm: FC<RegisterFormProps> = ({ children, ...props }) => {
  const { portal, blockState } = props

  return (
    <Block blockState={blockState} factor={1.5} offset={0}>
      <HTMLWrapper portal={portal}>
        <SRegisterForm>{children}</SRegisterForm>
      </HTMLWrapper>
    </Block>
  )
}

export default RegisterForm
