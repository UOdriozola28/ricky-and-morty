import type { CharacterProp } from "../types";

class CharacterMapped {

  id: number;
  name: string;
  gender: string;
  image: string;
  species: string;

  constructor(data: CharacterProp) {
    this.id = data.id
    this.name = data.name
    this.gender = data.gender
    this.image = data.image
    this.species = data.species
  }

}

export default CharacterMapped