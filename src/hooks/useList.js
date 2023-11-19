import { useEffect, useState, useRef } from 'react'
import config from '../constants'

export default function useList() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const originalData = useRef([])

  const fetchMore = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    try {
      fetch(`${config.URL}&results=15&page=${page}`)
        .then(res => res.json())
        .then(res => {
          setData(prev => [...prev, ...res.results])
          originalData.current = [...data, ...res.results]
        })
    } catch (error) {
      console.log(error)
    }
  }, [page])

  return { originalData, data, setData, fetchMore }
}
