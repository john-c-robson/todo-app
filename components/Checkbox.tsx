import React from 'react'
import { TiTick } from 'react-icons/ti'
import { LuTimerReset } from 'react-icons/lu'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <>
      {checked ? (
        <button className="bg-green-600 hover:bg-green-400 px-6 py-3 rounded-md" onClick={() => onChange(!checked)}>
          <TiTick />
        </button>
      ) : (
        <button className="bg-gray-600 hover:bg-gray-400 px-6 py-3 rounded-md" onClick={() => onChange(!checked)}>
          <LuTimerReset />
        </button>
      )}
    </>
  )
}
