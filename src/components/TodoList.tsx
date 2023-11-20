import React from 'react'
import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import { TodoActions } from './Reduecrs'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<TodoActions>

}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className='todos'>
            {todos?.map((todo) => (
                <SingleTodo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoList
