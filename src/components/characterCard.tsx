import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function CharacterCard({character})  {
  const navigate =  useNavigate()
  const onDirect = (page:number) => {
    navigate(`/characterdetail/${page}`,{replace:true})
  }
    return (
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={character.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h6" component="div" >
          {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Especie: {character.species}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onDirect(character.id)}>
          Detalle
        </Button>
      </CardActions>
    </Card>
    </Grid>

        
    )
}

