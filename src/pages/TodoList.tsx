import TodoInput from "../components/TodoInput"
import TodoItem from "../components/TodoItem"
import { useState } from "react"
import { Todo } from "../types/Todo"

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Do laundry", completed: false },
  ])

  const addTodo = (newTodo : string) => {
    const todo: Todo = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    }

    setTodos(prevTodos => [...prevTodos, todo])
  }

  const handleToggleComplete = (id:number) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id ===id ? {...todo, completed: !todo.completed} : todo))
  }

  const handleDeleteTodo = (id:number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>
        <TodoInput addTodo={addTodo}/>
        <ul className="space-y-4">
          {
            todos.map((todo) => {
              return (
                <TodoItem 
                key={todo.id} 
                todo = {todo}
                onToggleComplete = {handleToggleComplete}
                onDelete = {handleDeleteTodo}
                />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TodoList