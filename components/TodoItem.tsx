import { TodoItemType } from '@/types'
import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import Checkbox from './Checkbox'
import { useTodoStore } from '@/stores/useTodoStore'

interface TodoItemProps {
  todo: TodoItemType
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { updateTodoDone, deleteTodo, updateTodoText } = useTodoStore()

  return (
    <>
      <div
        key={todo.id}
        className="flex flex-row justify-between items-center py-2"
      >
        <input
          className="bg-slate-700 me-4 p-2 rounded-md grow"
          type="text"
          value={todo.text}
          onChange={(e) => updateTodoText(todo.id, e.target.value)}
        />
        <Checkbox
          checked={todo.done}
          onChange={(checked) => updateTodoDone(todo.id, checked)}
        />
        <button
          className="bg-red-600 hover:bg-red-400 ms-4 p-3 rounded-md text-white"
          onClick={() => deleteTodo(todo.id)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </>
  )
}
