import { useEffect, useRef } from "react";

export default function useNearScreen(fetchMore) {
  const elementRef = useRef(null)

  useEffect(() => {
    if(elementRef.current === undefined) return

    const handleIntersection = (entries) => {
      console.log('intersecting')
      if(entries[0].isIntersecting) {
        fetchMore()
      }
    }

    const observer = new IntersectionObserver(handleIntersection)
    observer.observe(elementRef.current)

    return () => {
      if(observer) observer.disconnect()
    }
  }, [])

  return { elementRef }
}