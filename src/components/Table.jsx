import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default function Table({ users, isColored, handleRemove, handleHeaderSort }) {
  return (
    <table className='w-full text-center mt-12'>
      <TableHead handleHeaderSort={handleHeaderSort}/>
      <TableBody users={users} isColored={isColored} handleRemove={handleRemove}/>
    </table>
  )
}
