import { FC, ReactNode, MutableRefObject } from 'react'
import { useThree } from 'react-three-fiber'

import { SHTMLWrapper } from './SHTMLWrapper'

export interface HTMLWrapperProps {
  children: ReactNode
  portal: MutableRefObject<HTMLElement>
}

const HTMLWrapper: FC<HTMLWrapperProps> = ({ children, ...props }) => {
  const { portal } = props

  const { size } = useThree()

  return (
    <SHTMLWrapper size={size} portal={portal}>
      {children}
    </SHTMLWrapper>
  )
}

export default HTMLWrapper
