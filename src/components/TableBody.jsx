import React from 'react'

export default function TableBody({ users, isColored, handleRemove }) {
  return (
    <tbody>
      {
        users.map(user => {
          return <TableRow user={user} key={user.login.uuid + Math.random() * 999} isColored={isColored} handleRemove={handleRemove}/>
        })
      }
    </tbody>
  )
}

function TableRow({ user, isColored, handleRemove }) {
  return(
    <tr className={`${isColored ? 'colorfull' : ''}`}>
      <td>
        <img src={user.picture.thumbnail} alt={`Avatar of ${user.name.first + ' ' + user.name.last}`} width={50} style={{ objectFit: 'cover', margin: 'auto' }}/>
      </td>
      <td>
        {user.name.first}
      </td>
      <td>
        {user.name.last}
      </td>
      <td>
        {user.location.country}
      </td>
      <td>
        <button
          onClick={() => handleRemove(user.login.uuid)}
          className='px-2 py-1 border-red-500 border-[1.5px] rounded-md bg-red-300 hover:bg-red-400'
        >
          Remove
        </button>
      </td>
    </tr>
  )
}
