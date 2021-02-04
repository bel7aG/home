import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {
  // Prevent build error "window is undefined" but keep keep working
  const isServer = typeof window === 'undefined'

  const [storedValue, setStoredValue] = useState(() => {
    if (isServer) {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (!isServer) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch {}
  }
  return [storedValue, setValue]
}
