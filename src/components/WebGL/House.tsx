import { useRef, useState, FC, RefObject } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

interface HouseProps {
  isActive?: boolean
}

const House: FC<HouseProps> = (props) => {
  const { isActive = false } = props

  const houseRef = useRef<any>() as RefObject<any>

  const [hovered, setHover] = useState(false)

  const { scale } = useSpring({
    scale: isActive || hovered ? [1.3, 1.3, 1.3] : [1, 1, 1]
  })

  const { nodes, materials } = useGLTF('/static/glb/scene.glb')

  // Animate model
  useFrame(() => {
    houseRef.current.rotation.y += hovered ? 0.004 : 0
  })

  return (
    <animated.group
      scale={scale as any}
      ref={houseRef}
      onPointerOver={() => isActive === false && setHover(true)}
      onPointerOut={() => isActive === false && setHover(false)}>
      <group>
        <group>
          <mesh material={materials.main_mat} geometry={(nodes as any).ground_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_06_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_013_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_016_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_012_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_00_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_03_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_09_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_014_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_023_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_02_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_07_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_04_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_08_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_010_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_011_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_015_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_017_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_019_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_020_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_021_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_022_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_018_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_029_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_027_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_038_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_042_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_026_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_024_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_030_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_032_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_028_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_036_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_037_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_034_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_025_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_035_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_039_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_040_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_033_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_041_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_043_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_044_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_045_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_048_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_047_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_046_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_053_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_049_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_061_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_066_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_068_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_056_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_057_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_060_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_058_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_055_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_062_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_063_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_064_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_052_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_050_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_051_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_054_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_059_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_065_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_067_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_074_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_084_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_075_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_077_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_080_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_073_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_082_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_069_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_078_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_071_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_079_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_072_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_081_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_070_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_083_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_086_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_076_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_090_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0103_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_094_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_092_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_095_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_098_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_089_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_085_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_093_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_087_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_096_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_088_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_099_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0100_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0102_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0101_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_091_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0104_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0105_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0106_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0107_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0108_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0109_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0110_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0112_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0111_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0113_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0116_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0114_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0115_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0118_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0119_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0120_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0117_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).grass_0121_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_00_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_01_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_02_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_03_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_04_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_05_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_06_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_07_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_08_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_09_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).flower_10_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).crop_00_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).crop_01_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).crop_02_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).crop_03_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).dirt_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).chimney_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).house_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).support_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).fence_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).ball_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).rock_00_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).rock_01_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).rock_02_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).rock_03_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).rock_04_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_00_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_02_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_03_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_04_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_05_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_06_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_07_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).butterfly_08_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).dragonfly_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).tree_00_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).tree_01_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).tree_02_main_mat_0.geometry} />
          <mesh material={materials.main_mat} geometry={(nodes as any).tree_stump_main_mat_0.geometry} />
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/static/glb/scene.glb')

export default House
