import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Button,
    // TextField,
    Card,
    CardContent,
    CardMedia,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    // Chip,
    MenuItem
} from '@material-ui/core';
import {
    AddBox,
    Search
} from '@material-ui/icons';

const dubladores = [
    {
        nome: 'Mamoru Miyano',
        lingua: 'JP'
    },
    {
        nome: 'Miyuki Sawashiro',
        lingua: 'JP'
    },
    {
        nome: 'Manolo Rey',
        lingua: 'BR'
    },
    {
        nome: 'J. Michael Tatum',
        lingua: 'EN'
    }
]

const personagens = [
    {
        obra: 'Steins;Gate',
        nome: 'Okabe Rintarou',
        dublagem: [
            {
                lingua: 'JP',
                dublador: 'Mamoru Miyano'
            },
            {
                lingua: 'EN',
                dublador: 'J. Michael Tatum'
            }
        ],
        informacoes: 'Lorem Ipsum Dolor Sit Amet'
    },
    {
        obra: 'Cardfight Vanguard G',
        nome: 'Ibuki Kouji',
        dublagem: [
            {
                lingua: 'JP',
                dublador: 'Mamoru Miyano'
            }
        ],
        informacoes: 'Lorem Ipsum'
    }
]

const Home = () => {
    const [pesquisa, setPesquisa] = useState(false);
    const [nome, setNome] = useState("");
    const [obra, setObra] = useState("");
    const [dubladoresSelecionados, setDubladoresSelecionados] = useState([]);

    const _handleClickPesquisar = () => {
        setPesquisa(!pesquisa);
    }

    const _handleChangeNome = (e) => {
        setNome(e.target.value);
    }

    const _handleChangeObra = (e) => {
        setObra(e.target.value);
    }

    const _handleChangeDubladores = (e) => {
        setDubladoresSelecionados(e.target.value);
    }

    const _handleClickSearch = () => {
        console.log(`Procurando por ${nome} (${obra})`);
    }

    return (
        <div>
            <Grid container spacing={3} justifyContent="space-around" alignItems="flex-end">
                <Grid item lg={2} xs={5}>
                    <Button
                        component={Link}
                        to="/formChar"
                        variant="contained"
                        size="large"
                        startIcon={<AddBox/>}
                        color="primary"
                    >
                        NOVO
                    </Button>
                </Grid>
                <Grid item lg={2} xs={5}>
                    {/* <TextField label="PESQUISAR"/><Search/> */}
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={_handleClickPesquisar}
                    >
                        Pesquisar
                    </Button>
                    {pesquisa?
                    <Grid container spacing={1}>
                        <Grid item>    
                            <TextField
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                onChange={_handleChangeNome}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Obra"
                                variant="outlined"
                                fullWidth
                                onChange={_handleChangeObra}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="dubladoresLabel">Dubladores</InputLabel>
                                <Select
                                    id="dubladores"
                                    labelId="dubladoresLabel"
                                    multiple
                                    multiline
                                    fullWidth
                                    variant="outlined"
                                    label="Dubladores"
                                    value={dubladoresSelecionados}
                                    onChange={_handleChangeDubladores}
                                >
                                    {dubladores.map((dublador, id) => (
                                        <MenuItem key={id} value={dublador}>
                                            {dublador.nome}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Search onClick={_handleClickSearch}/>
                        </Grid>
                    </Grid>
                    : null}
                </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="center">
                {personagens.map((personagem, id) => {
                    return (
                        <Grid item sm={5} xs={12}>
                            <Card raised>
                                <CardContent>
                                    <Typography variant="h5">
                                        {personagem.obra}
                                    </Typography>
                                    <Typography variant="h4">
                                        {personagem.nome}
                                    </Typography>
                                </CardContent>
                                <CardMedia component="img"/>
                                <CardContent>
                                    <Typography>
                                        Dubladores: {personagem.dublagem.map((dublagem, id) => {
                                            return (
                                                <> {id !== 0? " - " : null}
                                                {dublagem.dublador} ({dublagem.lingua})</>
                                            );
                                        })}
                                    </Typography>
                                    <Typography>
                                        {personagem.informacoes}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Home;