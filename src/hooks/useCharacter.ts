import { useEffect, useRef, useState } from "react"
import type { CharacterProp, CharactersProp } from "../types"
import CharacterMapped from "../mapped/Character"
import { API_CHARACTERS_URL } from "../consts"

function useCharacter() {

  const [characters, setCharacters] = useState<CharactersProp>([])

  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef<IntersectionObserver>(null)
  const lastCharacterRef = useRef(null)

  useEffect(() => {

    const url = new URL(`${API_CHARACTERS_URL}?page=${page}`)

    fetch(url)
      .then((json) => json.json())
      .then(data => {
        const { results: characters, info } = data
        if (!info.next) setHasMore(false)
        const newCharacters = characters.map((item: CharacterProp) => new CharacterMapped(item))
        return setCharacters(prev => [...prev, ...newCharacters])
      })
  }, [page])

  useEffect(() => {

    if (!hasMore) return
    if (observer.current) observer.current?.disconnect()

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1)
      }
    })

    if (lastCharacterRef.current) {
      observer.current.observe(lastCharacterRef.current)
    }


  }, [characters, hasMore])

  return { characters, lastCharacterRef }

}

export default useCharacter