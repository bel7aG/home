import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'context'

const NotFound: NextPage = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/')
  }, [])

  return null
}

export default NotFound
