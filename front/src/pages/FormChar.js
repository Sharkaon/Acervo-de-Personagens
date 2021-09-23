import React, { useState } from 'react';
import {
    Button,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    // Chip,
    MenuItem,
} from '@material-ui/core';

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

const FormChar = () => {
    const [nome, setNome] = useState("");
    const [obra, setObra] = useState("");
    const [informacoes, setInformacoes] = useState("");
    const [dubladoresSelecionados, setDubladoresSelecionados] = useState([]);

    const _handleChangeNome = (e) => {
        setNome(e.target.value);
    }

    const _handleChangeObra = (e) => {
        setObra(e.target.value);
    }

    const _handleChangeInformacoes = (e) => {
        setInformacoes(e.target.value);
    }

    const _handleChangeDubladores = (e) => {
        setDubladoresSelecionados(e.target.value);
    }

    const _handleClickCadastrar = () => {
        console.log(`Cadastrando ${nome} (${obra}): ${informacoes} - ${dubladoresSelecionados[0].nome} (${dubladoresSelecionados[0].lingua})`);
    }
    
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={8}>
                <TextField
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    onChange={_handleChangeNome}
                />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    label="Obra"
                    variant="outlined"
                    fullWidth
                    onChange={_handleChangeObra}
                />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    label="Informações"
                    variant="outlined"
                    fullWidth
                    multiline
                    onChange={_handleChangeInformacoes}
                />
            </Grid>
            <Grid item xs={8}>
                <FormControl fullWidth>
                    <InputLabel id="dubladoresLabel">Dubladores</InputLabel>
                    <Select
                        id="dubladores"
                        labelId="dubladoresLabel"
                        multiple
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
            <Grid item xs={8}>
                <Button
                    variant="contained"
                    component="label"
                    color="primary"
                >
                    ANEXAR
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </Grid>
            <Grid item xs={8} justifyContent="center">
                <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={_handleClickCadastrar}
                >CADASTRAR</Button>
            </Grid>
        </Grid>
    );
}

export default FormChar;