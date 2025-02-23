'use client'

import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-slate-800 h-screen text-white">
        <div className="top bg-slate-900 p-4 pt-12 w-full text-center">
          <h1>Todo App</h1>
        </div>
        <TodoList />
      </div>
    </>
  )
}
