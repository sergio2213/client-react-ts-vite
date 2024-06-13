import { Typography } from "@mui/material"

interface Props {
    errorMessage: string
}

const DisplayPokemonError: React.FC<Props> = ({errorMessage}) => {
    return (
        <>
            <Typography variant="h1">404</Typography>
            <Typography variant="h3" color="text.secondary">{errorMessage}</Typography>
        </>
    )
}

export default DisplayPokemonError