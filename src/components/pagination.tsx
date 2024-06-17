import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Route, useNavigate } from 'react-router-dom';


export default function BasicPagination({paginacion, posicion}) {
    const navigate =  useNavigate();
const handleChange = (event, value) => {
    navigate(`../${value}`, {relative: "path"}) 
};
  return (
        <Stack spacing={10} marginBottom={8} alignItems={'center'}>
            <Pagination count={paginacion} color="primary" defaultPage={posicion} onChange={handleChange} hideNextButton hidePrevButton/>
        </Stack>
  );
}