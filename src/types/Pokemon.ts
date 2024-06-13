export interface Pokemon {
    id: number
    name: string
    sprites: {
      front_default: string
    }
    types: string[]
    height: number
    weight: number
  }

export interface PokemonError {
  message: string
}

export type FetchError = PokemonError | Error