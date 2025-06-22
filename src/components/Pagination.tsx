import type { PaginationProps } from "../types"

function Pagination({ onChangePage, totalPages, page: currentPage, hasPrevius, hasNext }: PaginationProps) {

  let arrayPages = Array.from({ length: totalPages ?? 0 }, (_, i) => ({
    id: crypto.randomUUID(),
    page: i + 1
  }))

  const addItemsNext = (5 - currentPage) < 0 ? 0 : (5 - currentPage)
  const addItemsPrev = (currentPage + 4) <= totalPages ? 0 : ((currentPage + 4) - totalPages)
  arrayPages = arrayPages.slice((currentPage - 5 < 0 ? 0 : (currentPage - 5) - addItemsPrev), (currentPage + 4 > totalPages ? totalPages : (currentPage + 4) + addItemsNext))

  return (
    <nav id="navigation" aria-label="Page navigation" className="w-full overflow-x-auto text-center">
      <ul className="inline-flex flex-nowrap text-sm border border-gray-700 rounded-lg">

        <li>
          <button disabled={!hasPrevius} type="button" onClick={onChangePage({ page: currentPage - 1 })} className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-cyan-400 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Previous
          </button>
        </li>

        {
          arrayPages.map(({ id, page }) => (

            <li key={id}>
              {
                page === currentPage
                  ? (
                    <button disabled type="button" aria-current="page" className="flex items-center justify-center px-4 h-8  text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                      {page}
                    </button>
                  )
                  : (
                    <button onClick={onChangePage({ page: page })} className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</button>
                  )
              }
            </li>
          ))}

        <li>
          <button disabled={!hasNext} onClick={onChangePage({ page: currentPage + 1 })} className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination