import React, { ChangeEvent, useState } from "react";

type TodoInputProps = {
    addTodo : (text: string) => void
}

const TodoInput = ({addTodo} : TodoInputProps) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleAddTodo = () =>{
        if(newTodo.trim()){
            addTodo(newTodo);
            setNewTodo("");
        }
    }

    return (
        <div className='mb-4 flex'>
            <input
                onChange={handleChange}
                type="text"
                className='w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
            />
            <button onClick={handleAddTodo} className='bg-teal-500 text-white px-6 py-2 rounded-r-lg hover:bg-teal-700 transition-all'>
                Add
            </button>
        </div>
    )
}

export default TodoInput
