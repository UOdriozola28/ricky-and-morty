import { useEffect, useState } from 'react';
import type { CharacterProp, CharactersProp, NextOrPreviusPage } from "../types"
import CharacterMapped from "../mapped/Character"
import { API_CHARACTERS_URL } from "../consts"

function useCharacterPagination() {

  const [characters, setCharacters] = useState<CharactersProp>([])

  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(true)
  const [hasPrevius, setHasPrevius] = useState(true)
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {

    const url = new URL(`${API_CHARACTERS_URL}?page=${page}`)

    fetch(url)
      .then((json) => json.json())
      .then(data => {
        const { results: characters, info } = data
        setTotalPages(info.pages)

        setHasNext(!!info.next)
        setHasPrevius(!!info.prev)

        const newCharacters = characters.map((item: CharacterProp) => new CharacterMapped(item))
        return setCharacters([...newCharacters])
      })

  }, [page])

  const handleNextOrPreviusPage = ({ page }: NextOrPreviusPage) => () => {
    setPage(page);
  }

  return { characters, totalPages, page, hasPrevius, hasNext, handleNextOrPreviusPage }

}

export default useCharacterPagination