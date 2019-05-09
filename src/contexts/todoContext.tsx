import * as React from 'react'

import todoReducer from '../reducers/todoReducer'
import useLocalStorage from '../hooks/useLocalStorage'

interface ITodoContext {
  id?: string
}

export const TodoContext = React.createContext<ITodoContext | null>(null)
export const TodoProvider = TodoContext.Provider
export const TodoConsumer = TodoContext.Consumer

export const A: React.FC = ({ children }) => {
  return (
    
  )
}
