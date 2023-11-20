import React, { useState, useRef, useEffect, useReducer } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { TodoActions } from './Reduecrs'
import './styles.css'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<TodoActions>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos({ type: 'EDIT', payload: { id: id, todo: editTodo } })
        setEdit(false);
    }

    const handleDelete = (id: number) => {
        setTodos({ type: 'REMOVE', payload: id })
    }

    const handleDone = (id: number) => {
        setTodos({ type: 'DONE', payload: id })
    }

    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"
                />
            ) : todo.isDone ? (
                <s className="todos__single--text">
                    {todo.todo}
                </s>
            ) : (
                <span className="todos__single--text">
                    {todo.todo}
                </span>)}
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span><span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
