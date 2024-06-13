import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Pokemon } from "../types/Pokemon"
import capitalizeFirstLetter from "../util/capitalizeFirstLetter"

interface Props {
    poke: Pokemon,
    onLoad: () => void
}

const PokemonListItem: React.FC<Props> = ({poke, onLoad}) => {
    return (
        <Card sx={{ maxWidth: '170px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} key={poke.id}>
            <CardMedia component="img" sx={{ width: '160px' }} image={poke.sprites.front_default} onLoad={onLoad} />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
                {capitalizeFirstLetter(poke.name)}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                #{poke.id}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default PokemonListItem