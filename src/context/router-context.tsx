import { useContext, createContext, FC, ReactNode } from 'react'
import { NextRouter } from 'next/router'

interface RouterContextProps {
  children: ReactNode
  router: NextRouter
}

const RouterContext = createContext<NextRouter | any>(null)

export const RouterContextProvider: FC<RouterContextProps> = ({ children, router }) => {
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
}
export const useRouter = () => useContext(RouterContext)
