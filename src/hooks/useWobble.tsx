import { useRef, RefObject } from 'react'
import { useFrame } from 'react-three-fiber'

export const useWobble = (factor: number = 1, fn: string = 'sin', callback?: Function) => {
  const reference = useRef<any>() as RefObject<any>

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (reference.current) reference.current.position.y = (Math as any)[fn](time) * factor
    if (callback) callback(time, reference.current)
  })

  return reference
}
