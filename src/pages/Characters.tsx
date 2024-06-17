import { Container, CssBaseline } from "@mui/material";
import { CharacterList } from "../components/characterList";
import ButtonAppBar from "../components/searchAppbar";
import React, { useState } from "react";
import BasicPagination from "../components/pagination";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER } from "../graphql/getcharacter";
import FilterBar from "../components/searchandfilter";



export function Character() {
    const [order, estableceDatos] = useState('');
    const [Search, estableceDatosSearch] = useState('');

    const orderCharacter = (order) => {
        estableceDatos(order)
        // if(localStorage.getItem('order')) (localStorage.getItem('order') == '1') ? localStorage.setItem('order', '0') : localStorage.setItem('order', '1');
    }

    const searchCharacter = (Search) => {
        estableceDatos(Search)
        console.log(estableceDatos)
    }


    const page = useParams()
    const { loading, error, data } = useQuery(GET_CHARACTER,{
        variables:{
            page:page.page
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const paginas = Math.ceil(Number(data.character.count)/20)
    return (
        <React.Fragment>
            <CssBaseline />
                <ButtonAppBar></ButtonAppBar>
            <Container fixed>
                <FilterBar order={orderCharacter} Search={searchCharacter}></FilterBar>
                <CharacterList datos={data.character}></CharacterList>
                <BasicPagination paginacion={paginas} posicion={page}></BasicPagination>
            </Container>
        </React.Fragment>
    )
}

