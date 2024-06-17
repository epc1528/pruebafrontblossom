import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { InputAdornment, TextField } from '@mui/material';
import { ImageSearch, SearchOutlined } from '@mui/icons-material';

export default function FilterBar({Search, order}) {
    return (
        <Box sx={{ flexGrow: 8, marginBottom: 10, borderSpacing: 10 }}>

                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlined />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <Button variant="outlined" color="success" onClick={() => Search(1)}>Buscar</Button>
                <Button variant="outlined" color="success" onClick={() => order(1)}>AZ/ZA</Button>

            <Box sx={{ alignItems: 'center', width: '50%' }}>

            </Box>
        </Box>
    );
}