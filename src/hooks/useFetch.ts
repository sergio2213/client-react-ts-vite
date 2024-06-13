import { useCallback, useState } from "react"
import { Pokemon, PokemonError } from "../types/Pokemon"

const useFetch = (initialUrl: string) => {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])
    const [error, setError] = useState<null | string>(null)
    const [prevPage, setPrevPage] = useState<null | string>(null)
    const [nextPage, setNextPage] = useState<null | string>(null)

    const fetchInitial = useCallback(async () => {
        try {
            const response = await fetch(initialUrl)
            const data = await response.json()
            console.log("fetchInitial")
            setPokemonData(data.results.filter((poke: Pokemon) => poke !== null))
            setPrevPage(data.prev)
            setNextPage(data.next)
            setError(null)
        } catch (error) {
            console.log(error)
        }
    }, [initialUrl])

    const fetchByName = async (name: string): Promise<void> => {
        try {
            const response = await fetch(`${initialUrl}/${name}`)
            if(response.status === 404) {
                throw new Error('Pokémon not found')
            }
            const data = await response.json()
            setPokemonData(() => [data as Pokemon])
            setPrevPage(null)
            setNextPage(null)
        } catch (error: unknown) {
            if(isPokemonError(error)) {
                console.log(error.message)
                setError(error.message)
            }
            
            setPokemonData([])
        }
    }

    const isPokemonError = (error: unknown): error is PokemonError => typeof error === 'object' && error !== null && 'message' in error && typeof (error as PokemonError).message === 'string'

    const fetchPrev = async () => {
        if(prevPage) {
            const response = await fetch(prevPage as string)
            const data = await response.json()
            setPokemonData(() => data.results as Pokemon[])
            setPrevPage(data.prev)
            setNextPage(data.next)
        }
    }

    const fetchNext = async () => {
        if(nextPage) {
            const response = await fetch(nextPage as string)
            const data = await response.json()
            setPokemonData(() => data.results as Pokemon[])
            setPrevPage(data.prev)
            setNextPage(data.next)
        }
    }

    return {
        pokemonData,
        error,
        prevPage,
        nextPage,
        fetchInitial,
        fetchByName,
        fetchPrev,
        fetchNext
    }
}

export default useFetch