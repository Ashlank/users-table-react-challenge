import React from 'react'

export default function TableHead({ handleHeaderSort }) {
  return (
    <thead>
      <tr>
        <th>Avatar</th>
        <th className='cursor-pointer' onClick={() => handleHeaderSort('name')}>Name</th>
        <th className='cursor-pointer' onClick={() => handleHeaderSort('lastname')}>Surname</th>
        <th className='cursor-pointer' onClick={() => handleHeaderSort('country')}>Country</th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}
