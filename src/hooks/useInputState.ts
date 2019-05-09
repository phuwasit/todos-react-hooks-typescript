import { useState } from 'react'

const useInputState = (initialValue: string): (string | ((e: React.ChangeEvent<HTMLInputElement>) => void))[] => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const reset = () => {
    setValue('')
  }
  return [value, handleChange, reset]
}

export default useInputState
