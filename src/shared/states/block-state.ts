import { createRef } from 'react'
import { IBlockState } from 'interfaces'

export const blockState: IBlockState = {
  sections: 5,
  pages: 4,
  zoom: 1,
  top: createRef()
}

export default blockState
