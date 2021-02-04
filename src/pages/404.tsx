import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound: NextPage = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/')
  }, [])

  return null
}

export default NotFound
