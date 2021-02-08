import { useState, FC } from 'react'
import { Object3DNode, useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

import { useWobble } from 'hooks'

interface BoxProps extends Object3DNode<Mesh, typeof Mesh> {
  color?: string
}

const Box: FC<BoxProps> = ({ ...props }) => {
  const [hoverd, setHoverd] = useState<boolean>(false)
  const { color = '#ff556b', ...rest } = props
  const boxRef = useWobble(0.5, 'cos')

  useFrame(() => {
    if (boxRef.current) boxRef.current.rotation.x = boxRef.current.rotation.y = boxRef.current.rotation.z += 0.01
  })

  const handleBoxColor = () => {
    setHoverd(!hoverd)
  }

  return (
    <mesh onPointerOut={handleBoxColor} ref={boxRef} {...rest}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={color} opacity={hoverd ? 1 : 0.7} />
    </mesh>
  )
}

export default Box
