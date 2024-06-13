import { Container, Typography } from "@mui/material"
import useFetch from "./hooks/useFetch"
import { useEffect, useState } from "react"
import PokemonSearchBox from "./components/PokemonSearchBox"
import PokemonList from "./components/PokemonList"
import DisplayPokemonError from "./components/DisplayPokemonError"
import PokemonLoadingSpinner from "./components/PokemonLoadingSpinner"

function App() {
  const URL_API = 'http://localhost:3000/pokemon'
  const { pokemonData, error, fetchInitial, fetchByName } = useFetch(URL_API)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(0)

  useEffect(() => {
    if(input === '') {
      console.log('fetching...')
      setLoaded(0)
      setLoading(true)
      fetchInitial()
    }
  }, [fetchInitial, input])

  const handleLoaded = () => {
    setLoaded((prev) => {
      const newValue = prev + 1
      if(newValue === pokemonData.length) {
        setLoading(false)
      }
      return newValue
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoaded(0)
    setLoading(true)
    fetchByName(input)
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value)
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header>
          <Typography component="h1" variant="h2">PokeApi</Typography>
        </header>
        <PokemonSearchBox isDisabled={loading} handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
        {error && <DisplayPokemonError errorMessage={error} />}
        {pokemonData.length > 0 && <Typography variant="h4">{loaded}/{pokemonData.length}</Typography>}
        {loading && <PokemonLoadingSpinner />}
        <PokemonList onLoad={handleLoaded} pokemonData={pokemonData} />
      </Container>
    </>
  )
}

export default App
