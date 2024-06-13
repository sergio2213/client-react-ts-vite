import { Box } from "@mui/material"
import { Pokemon } from "../types/Pokemon"
import PokemonListItem from "./PokemonListItem"

interface Props {
    pokemonData: Pokemon[],
    onLoad: () => void
}

const PokemonList: React.FC<Props> = ({pokemonData, onLoad}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', textAlign: 'center', my: '1rem'}}>
          {pokemonData.map(poke => (
            poke ?
            <PokemonListItem onLoad={onLoad} key={poke.id} poke={poke} />
            : null
          ))}
        </Box>
    )
}

export default PokemonList