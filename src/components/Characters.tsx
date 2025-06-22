import type { RefObject } from "react"
import type { CharactersProp } from "../types"

interface Props {
  characters: CharactersProp
  lastCharacterRef: RefObject<HTMLElement | null>
}

function ListOfCharacters({ characters, lastCharacterRef }: Props) {

  const lastCharacter = characters.length - 1

  return (characters.map((char, index) => {

    return (
      <section ref={index === lastCharacter ? lastCharacterRef : null} className="character" key={char.id}>
        <img src={char.image} alt={char.name} />
        <h4>{char.name}</h4>
        <span>{char.species}</span>
        <span>{char.gender}</span>
      </section>
    )

  }))
}

function Characters({ characters, lastCharacterRef }: Props) {
  return (
    <div className="characters">
      {characters.length > 0
        ? <ListOfCharacters characters={characters} lastCharacterRef={lastCharacterRef} />
        : 'Sin resultados'
      }
    </div>
  )
}

export default Characters
