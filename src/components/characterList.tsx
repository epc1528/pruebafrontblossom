import '../output.css'
import { CharacterCard } from './characterCard';
import { Grid } from '@mui/material';



export function CharacterList({datos}) {
    console.log(datos)
    return (
        <div>
            <Grid container spacing={4} marginBottom={8}>
                {datos.character.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
                }
            </Grid>
        </div>
    )
}


  
