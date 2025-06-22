import type { CharactersProp, PaginationProps } from "../types"
import Pagination from "./Pagination"

interface Props extends PaginationProps {
  characters: CharactersProp
}

function ListOfCharacters({ characters }: { characters: CharactersProp }) {
  return (characters.map((char) => {
    return (
      <section className="character bg-cyan-800 p-4 rounded-xl" key={char.id}>
        <picture>
          <img
            src={char.image}
            alt={char.name}
            className="rounded-xl transition ease-in hover:scale-105 cursor-pointer"
            loading="lazy"
            style={{ objectFit: "cover", width: "300px" }}
          />
        </picture>
        <div className="mt-4">
          <h3 className="font-bold text-yellow-300">
            {char.name}
            <span className="text-white "> - {char.species}</span>
          </h3>
          <span className="italic">{char.gender}</span>
        </div>
      </section>
    )
  }))
}

function CharactersPagination({ characters, totalPages, page, hasPrevius, hasNext, onChangePage }: Props) {

  const charactersLgt = characters.length > 0

  return (
    <div className="characters">
      {charactersLgt
        ? (
          <>
            <ListOfCharacters characters={characters} />
            <Pagination onChangePage={onChangePage} totalPages={totalPages} page={page} hasPrevius={hasPrevius} hasNext={hasNext} />
          </>
        )
        : 'Sin resultados'
      }
    </div>
  )
}

export default CharactersPagination
