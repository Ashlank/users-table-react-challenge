import React from 'react'

export default function Filters({ query, sort, handleColor, handleSort, handleReset, handleInputChange }) {
  return (
    <div className='w-full flex justify-evenly my-6'>
      <Button text='Color rows' onClick={handleColor}/>
      <Button text={sort === 'country' ? 'Not sort by country' : 'Sort by country'} onClick={handleSort}/>
      <Button text='Reset state' onClick={handleReset}/>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Filter by country'
        className='px-4 py-2 border-gray-500 border-[2px] rounded-xl'
      />
    </div>
  )
}

function Button({ text, onClick }) {
  return(
    <button
      type='button'
      className='px-4 py-2 border-gray-800 border-[2px] rounded-xl bg-green-300 hover:bg-green-400 active:translate-y-[2px]'
      onClick={onClick}
    >
      {text}
    </button>
  )
}