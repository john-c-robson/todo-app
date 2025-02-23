import { TodoItemType } from '@/types'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { v4 } from 'uuid'
import TodoItem from './TodoItem'

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>([])

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: v4(),
        text: 'New Todo',
        done: false,
      },
    ])
  }

  const updateTodoDone = (id: string, done: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.done = done
        }
        return todo
      })
    )
  }

  const updateTodoText = (id: string, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.text = text
        }
        return todo
      })
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

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
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodoText={updateTodoText}
              updateTodoDone={updateTodoDone}
              deleteTodo={deleteTodo}
            />
          ))}
      </>
      <h1 className="py-3">Completed Todos</h1>
      <>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodoText={updateTodoText}
              updateTodoDone={updateTodoDone}
              deleteTodo={deleteTodo}
            />
          ))}
      </>
    </div>
  )
}
