import React, { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  }

  return (
    <div className='bg-gradient flex flex-col gap4'>

      <input
        ref={inputRef}
        type="text"
        autoFocus
        className="bg-white text-black px-4 py-2 rounded-md" />

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md  cursor-pointer '
        onClick={handleClick}
      >Focus</button>
    </div>
  )
}
