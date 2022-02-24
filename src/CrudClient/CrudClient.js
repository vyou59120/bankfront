import React, { Component, useState, useEffect } from 'react';
import './CrudClient.css';
import { userService } from '../Services/user_services'
import { accountService } from '../Services/account_services'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../Context/Context'
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import NestedList from '../Component/MenuLateral/MenuLateral'

const { format } = require("date-fns");

export default function CreateUser() {

    const { state } = React.useContext(AuthContext);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [cp, setCP] = useState('');
    const [ville, setVille] = useState('');
    const [role, setRole] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [searching, setSearching] = useState(false);
    const [datenaissance, setDatenaissance] = React.useState(new Date());

    const handleChange = (newValue) => {
        console.log(newValue)
        setDatenaissance(newValue);
    };

    useEffect(() => {
        
    }, [])

    const postData = (e) => {

        e.preventDefault();
        setSearching(true)
        
        let user = {
            "nom": nom,
            "prenom": prenom,
            "adresse": adresse,
            "cp": cp,
            "ville": ville,
            "email": email,
            "role": "CLIENT",
            "datenaissance": datenaissance
        }
        
        userService.register(user)
                .then(
                    user => {
                        console.log(user)
                        createAccount(user)
                    },
                    error => {
                        alert(error)
                    }
            );

    }

    const createAccount = (user) => {

        setSearching(true);
  
        let account = {
            "numaccount": "123456789"+user.userid,
            "agenceid": 1,
            "userid": user.userid,
            "datecreation": new Date().toISOString(),
            /*"datecreation": new Date().toLocaleDateString("fr-FR"),*/
            /*"datecreation": format(new Date(), "yyyy-MM-ddTHH:mm:ss"),*/
            "solde": 0,
            "datecloture": "3022-02-15T20:29:36.048Z"
        }


        accountService.create(account)
            .then(
                user => {
                    setSearching(false)
                },
                error => {
                    alert(error)
                }
            );

    }



    return (
        <div className='dashboardClient'>
        <NestedList className='menuContainer'/>
        <Container component="main" maxWidth="xs">
            {state['message'] && <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1, m: 1 }}>
                {state['message']}
            </Box>}

            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Creation Client
                </Typography>
                <Box component="form" onSubmit={postData} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="nom"
                        label="Nom"
                        name="nom"
                        autoComplete="nom"
                        autoFocus
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="prenom"
                        label="prenom"
                        type="text"
                        id="prenom"
                        autoComplete="prenom"
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="adresse"
                        label="Adresse"
                        type="text"
                        id="adresse"
                        autoComplete="adresse"
                        onChange={(e) => setAdresse(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="cp"
                        label="Code Postal"
                        type="text"
                        id="cp"
                        autoComplete="cp"
                        onChange={(e) => setCP(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="ville"
                        label="Ville"
                        type="text"
                        id="ville"
                        autoComplete="cp"
                        onChange={(e) => setVille(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        type="text"
                        id="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            margin="normal"
                            required
                            fullWidth
                            name="ville"
                            label="Date de naissance"
                            id="datenaissance"
                            value={datenaissance}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {searching && <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>}
                        Créer
                    </Button>
                </Box>
            </Box>
            </Container>
            </div>
    )




}