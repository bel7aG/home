import { useMemo, FC } from 'react'
import * as THREE from 'three'
import { Object3DNode, useLoader, useUpdate, useThree } from 'react-three-fiber'
import { animated } from '@react-spring/three'

interface TextProps extends Object3DNode<THREE.Group, typeof THREE.Group> {
  children: string
  vAlign?: string
  hAlign?: string
  color?: string
  size?: number
  position?: [number, number, number]
}

const Text: FC<TextProps> = ({ children, ...props }) => {
  const { vAlign = 'center', hAlign = 'center', size = 40, color = '#bfe0ff', ...rest } = props

  const { viewport } = useThree()

  const { width } = viewport

  const font = useLoader(THREE.FontLoader, '/static/blob/bold.blob')

  const config = useMemo(
    () => ({
      font,
      size: width < 21 ? size / 1.4 : size,
      height: size <= 20 ? 2 : width < 21 ? size / 3 : size / 2,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8
    }),
    [font, width < 21]
  )

  const mesh = useUpdate(
    (self: any) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children, width < 21]
  )

  const title = useMemo(() => (typeof children === 'string' ? children.toLocaleUpperCase() : ''), [children])

  return (
    <animated.group {...rest} scale={[0.05, 0.05, 0.05]}>
      <mesh ref={mesh}>
        <textBufferGeometry args={[title, config]} />
        <meshPhongMaterial color={color} />
      </mesh>
    </animated.group>
  )
}

export default Text
