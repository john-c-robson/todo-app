import { TodoItemType } from '@/types'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ITodoStore {
  todos: TodoItemType[]
  addTodo: () => void
  updateTodoText: (id: string, text: string) => void
  updateTodoDone: (id: string, done: boolean) => void
  deleteTodo: (id: string) => void
}

export const useTodoStore = create<ITodoStore>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: () => {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: v4(),
              text: 'New Todo',
              done: false,
            },
          ],
        }))
      },

      updateTodoText: (id, text) => {
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              todo.text = text
            }
            return todo
          }),
        }))
      },

      updateTodoDone: (id, done) => {
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              todo.done = done
            }
            return todo
          }),
        }))
      },

      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }))
      },
    }),
    {
      name: 'johns-todo-app_todo-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
