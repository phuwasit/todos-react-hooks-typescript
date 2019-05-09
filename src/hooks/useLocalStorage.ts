import { useState, useEffect } from 'react'

const useLocalStorage = (key: string, initialValue: string = ''): (string | ((item: string) => void))[] => {
  const [item, setItem] = useState(() => {
    let value: string
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      )
    } catch (e) {
      value = initialValue
    }
    return value
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(item))
  }, [key, item])

  return [item, setItem]
}

export default useLocalStorage
