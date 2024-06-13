import { Box, CircularProgress } from "@mui/material"

const PokemonLoadingSpinner = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', py: '3rem'}}>
            <CircularProgress />
        </Box>
    )
}

export default PokemonLoadingSpinner