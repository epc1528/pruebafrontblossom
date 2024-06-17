import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_CHARACTERDETAIL } from '../graphql/getcharacter';
import { useQuery } from '@apollo/client';
import ButtonAppBar from '../components/searchAppbar';
import React from 'react';

export function CharacterDetails() {
    const page = useParams()
    const { loading, error, data } = useQuery(GET_CHARACTERDETAIL, {
        variables: {
            page: page.id
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <React.Fragment>
            <CssBaseline />
            <ButtonAppBar></ButtonAppBar>
            <Container maxWidth="sm">
                <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="100"
                            image={data.characters.image}
                        />
                        <CardContent>
                            <Typography noWrap gutterBottom variant="h6" component="div">
                                Nombre: {data.characters.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Especie: {data.characters.species}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                tipo: {data.characters.type}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Comment: {data.characters.comment}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Genero: {data.characters.gender}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                status: {data.characters.status}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        </Container>
    </React.Fragment >

        
    )
}
