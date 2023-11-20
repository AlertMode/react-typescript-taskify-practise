import React, { useState, useReducer } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { TodoReducer } from './components/Reduecrs'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")

  const [state, dispatch] = useReducer(TodoReducer, [])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      dispatch({ type: 'ADD', payload: todo })
      setTodo('')
    }
  }

  return <div className="App">
    <span className="heading">Taskify</span>
    <InputField
      todo={todo}
      setTodo={setTodo}
      handleAdd={handleAdd}
    />
    <TodoList
      todos={state}
      setTodos={dispatch}
    />
  </div>
};

export default App;
