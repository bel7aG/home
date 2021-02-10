import { styled } from 'shared'
import { Html } from '@react-three/drei'

export const SHTMLWrapper = styled(Html)<{ size: any }>`
  display: block;
  position: absolute;
  top: ${({ size }) => -size.height / 2}px;
  left: ${({ size }) => -size.width / 2}px;
  width: ${({ size }) => size.width}px;
  height: ${({ size }) => size.height}px;
  pointer-events: none;
`
