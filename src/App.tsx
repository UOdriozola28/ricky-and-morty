// import Characters from "./components/Characters"
import CharactersPagination from "./components/CharactersPagination"
import useCharacterPagination from "./hooks/useCharacterPagination"
// import useCharacter from "./hooks/useCharacter"

function App() {
  // const { characters, lastCharacterRef } = useCharacter()
  const { characters, totalPages, page, hasPrevius, hasNext, handleNextOrPreviusPage } = useCharacterPagination()

  return (
    <main>
      {/* <Characters characters={characters} lastCharacterRef={lastCharacterRef} /> */}

      <CharactersPagination characters={characters} totalPages={totalPages} page={page} hasPrevius={hasPrevius} hasNext={hasNext} onChangePage={handleNextOrPreviusPage} />

    </main>
  )
}
export default App
