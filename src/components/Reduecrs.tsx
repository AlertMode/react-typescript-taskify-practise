import { Todo } from '../model'


export type TodoActions =
    | { type: 'ADD', payload: string }
    | { type: 'REMOVE', payload: number }
    | { type: 'DONE', payload: number }
    | { type: 'EDIT', payload: EditTodo }

interface EditTodo {
    id: number,
    todo: string
}

export const TodoReducer = (state: Todo[], action: TodoActions) => {
    switch (action.type) {
        case 'ADD': {
            return [
                ...state, { id: Date.now(), todo: action.payload, isDone: false }
            ]
        }
        case 'REMOVE': {
            return state.filter((todo) => todo.id !== action.payload)
        }
        case 'DONE': {
            return state.map((todo) => todo.id === action.payload ? {
                ...todo, isDone: !todo.isDone
            } : todo)
        }
        case 'EDIT': {
            return state.map((todo) => todo.id === action.payload.id ? { ...todo, todo: action.payload.todo } : todo)
        }
        default: {
            return state
        }
    }
}