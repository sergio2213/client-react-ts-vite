import { Box, Button, TextField } from "@mui/material"

interface Props {
    handleSubmit: (e: React.FormEvent) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    input: string,
    isDisabled: boolean
}

const PokemonSearchBox: React.FC<Props> = ({handleSubmit, handleChange, input, isDisabled}) => {
    return (
        <Box onSubmit={handleSubmit} component="form" sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', my: '1rem' }}>
          <TextField disabled={isDisabled} size="small" variant="outlined" label="Enter a Pokémon name" type="search" value={input} onChange={handleChange} />
          <Button disabled={isDisabled} size="small" type="submit" variant="contained">Search</Button>
        </Box>
    )
}

export default PokemonSearchBox