import useList from "../hooks/useList"
import { useState, useMemo } from "react"
import Table from "./Table"
import Filters from "./Filters"
import useNearScreen from "../hooks/useNearScreen"

export default function Container() {
  const [isColored, setIsColored] = useState(false)
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const { originalData, data, setData, fetchMore } = useList()
  const { elementRef } = useNearScreen(fetchMore)

  function filteredUsers() {
    return query
      ?
      data.filter( user => {
        return user.location.country.toLowerCase().startsWith(query.toLowerCase())
      })
      : data
  }

  function sortedUsers() {
    return sort !== ''
      ?
      [...filteredData].sort((userA, userB) => {
        switch (sort) {
          case 'name':
            return userA.name.first.localeCompare(userB.name.first)
          case 'lastname':
            return userA.name.last.localeCompare(userB.name.last)
          case 'country':
            return userA.location.country.localeCompare(userB.location.country)
          default:
            return userA.location.country.localeCompare(userB.location.country)
        }
      })
      :
      filteredData
  }

  const filteredData = useMemo(() => filteredUsers(), [query, data])
  const sortedData = useMemo(() => sortedUsers(), [sort, filteredData])

  const handleColor = () => {
    setIsColored(prev => !prev)
  }

  const handleSort = () => {
    if(sort === 'country') {
      setSort('')
    } else
      setSort('country')
  }

  const handleReset = () => {
    setData(originalData.current)
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleRemove = (id) => {
    const newData = data.filter( user => {
      return user.login.uuid !== id
    })
    setData(newData)
  }

  const handleHeaderSort = (field) => {
    if(sort !== field) {
      setSort(field)
    } else
      setSort('')
  }

  return (
    <div className="w-full">
      <div className="min-h-screen">
        <Filters query={query} sort={sort} handleColor={handleColor} handleSort={handleSort} handleReset={handleReset} handleInputChange={handleInputChange}/>
        <Table users={sortedData} isColored={isColored} handleRemove={handleRemove} handleHeaderSort={handleHeaderSort}/>
      </div>
      <div ref={elementRef} className="text-center">Cargando ...</div>
    </div>
  )
}
