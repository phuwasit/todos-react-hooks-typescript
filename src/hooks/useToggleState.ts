import { useState } from 'react'

const useToggleState = (initialState: boolean): (boolean | (() => void))[] => {
  const [state, setState] = useState<boolean>(initialState)
  const toggle = () => {
    setState(state)
  }
  return [state, toggle]
}

export default useToggleState
