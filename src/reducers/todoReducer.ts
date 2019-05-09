import * as React from 'react'
import uuid from 'uuid/v4'

export enum ActionType {
  AddTodo = 'ADD_TODO',
  EditTodo = 'EDIT_TODO',
  RemoveTodo = 'REMOVE_TODO',
  ToggleTodo = 'TOGGLE_TODO'
}

export interface IState {
  id?: string
  task?: string
  completed?: boolean
}

export interface IAction {
  type: ActionType
  payload: IState
}

export const initialState: Array<IState> = [
  { id: '1', task: 'hi', completed: true },
  { id: '2', task: 'good', completed: false },
]

const reducer: React.Reducer<Array<IState>, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.AddTodo:
      return [...state, { id: uuid(), task: action.payload.task, completed: false }]
    case ActionType.EditTodo:
      return state.map(todo => todo.id === action.payload.id? {...todo, task: action.payload.task }: todo)
    case ActionType.RemoveTodo:
      return state.filter(todo => todo.id !== action.payload.id)
    case ActionType.ToggleTodo:
      return state.map(todo => todo.id === action.payload.id? { ...todo, completed: !todo.completed }: todo)
    default:
     return state
  }
}

export default reducer
