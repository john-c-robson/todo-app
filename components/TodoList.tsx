import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import TodoItem from './TodoItem'
import { useTodoStore } from '@/stores/useTodoStore'

export default function TodoList() {
  const { todos, addTodo } = useTodoStore()

  return (
    <div className="p-8 w-full text-center">
      <button
        className="flex flex-row bg-green-600 px-2 py-1 rounded-md"
        onClick={addTodo}
      >
        <FaPlus className="me-2 mt-1" />
        Add Todo
      </button>

      <h1 className="py-3">In Progress Todos</h1>

      <>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </>
      <h1 className="py-3">Completed Todos</h1>
      <>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </>
    </div>
  )
}
