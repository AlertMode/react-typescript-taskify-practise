import { Todo, Actions } from './model'

const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case 'add': {
            return [
                ...state, { id: Date.now(), todo: action.payload, isDone: false }
            ]
        }
        case 'remove': {
            state.forEach(e => console.log(e))
            return state.filter((todo) => todo.id !== action.payload)
        }
        case 'done': {
            return state.map((todo) => todo.id === action.payload ? {
                ...todo, idDone: !todo.isDone
            } : todo)
        }
        default: {
            return state
        }
    }
}

export default TodoReducer