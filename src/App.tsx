import { useState } from "react"
import CharactersPagination from "./components/CharactersPagination"
import useCharacterPagination from "./hooks/useCharacterPagination"
import Characters from "./components/Characters"
import useCharacter from "./hooks/useCharacter"

function App() {
  const [currentPath] = useState(window.location.pathname)

  const { characters: charactersInfinity, lastCharacterRef } = useCharacter()
  const { characters, totalPages, page, hasPrevius, hasNext, handleNextOrPreviusPage } = useCharacterPagination()

  return (
    <main>

      <header className="justify-center gap-6 bg-gray-800 fixed w-full z-10">
        <nav className="p-4 flex flex-wrap justify-center gap-6 bg-gray-800 w-full">
          <a href="/" className={`underline hover:text-amber-300 ${currentPath === '/' && 'text-amber-300'}`}>Pagination - Characters</a>
          <a href="/infinity" className={`underline hover:text-amber-300 ${currentPath === '/infinity' && 'text-amber-300'}`}>Infinity Scroll - Characters </a>
        </nav>
      </header>
      {
        currentPath === '/infinity' && (
          <Characters characters={charactersInfinity} lastCharacterRef={lastCharacterRef} />
        )
      }
      {
        currentPath === '/' && (
          <CharactersPagination characters={characters} totalPages={totalPages} page={page} hasPrevius={hasPrevius} hasNext={hasNext} onChangePage={handleNextOrPreviusPage} />
        )
      }
    </main>
  )
}
export default App
