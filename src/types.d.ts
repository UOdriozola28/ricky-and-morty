export interface CharacterProp {
  id: number,
  gender: string,
  image: string,
  name: string,
  species: string
}

export type CharactersProp = CharacterProp[]

export interface NextOrPreviusPage {
  page: number
}


export interface PaginationProps {
  onChangePage: ({ page }: NextOrPreviusPage) => () => void
  totalPages: number
  page: number
  hasPrevius: boolean
  hasNext: boolean
}