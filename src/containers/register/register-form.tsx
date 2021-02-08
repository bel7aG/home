import { FC } from 'react'

import { Block, HTMLWrapper } from 'components'
import { IBlockState } from 'interfaces'

interface RegisterFormProps {
  portal: any
  blockState: IBlockState
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { portal, blockState } = props
  return (
    <Block blockState={blockState} factor={0} offset={0}>
      <HTMLWrapper portal={portal}>
        <div>
          <h1>the form will be here</h1>
        </div>
      </HTMLWrapper>
    </Block>
  )
}

export default RegisterForm
