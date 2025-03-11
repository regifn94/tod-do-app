import React from 'react'
import { Todo } from '../types/Todo';

type TodoItemProps = {
    todo: Todo
    onToggleComplete:(id:number) => void
    onDelete:(id:number) => void
}

const TodoItem = ({todo, onToggleComplete, onDelete} : TodoItemProps) => {
    const {text, completed} = todo;

  return (
    <li className={`flex items-center justify-between p-4 rounded-lg shadow-md 
        ${completed ? "bg-gray-200 line-through" : "bg-teal-100"}`}>
            <span onClick={() => onToggleComplete(todo.id)} className={`cursor-pointer ${completed ? "text-gray-600" : "todo-gray-900"}`}>
                {text}
            </span>
            <button onClick={() => onDelete(todo.id)} className='text-red-500 hover:text-red-600 transition-all'>Delete</button>
        </li>
  )
}

export default TodoItem
