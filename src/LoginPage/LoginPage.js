import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"
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
import { userService } from '../Services';
import { AuthContext } from '../Context/Context'

function LoginPage() {

    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const loggingIn = useState(false);
    const navigate = useNavigate();
    const { dispatch } = React.useContext(AuthContext);
    const { state } = React.useContext(AuthContext);

    useEffect(() => {
        dispatch({
            type: "LOGOUT"
        })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (email != "" && motdepasse != "") {
            userService.Login(email, motdepasse)
                .then(user => {
                    if (user['id'] != 0) {
                        dispatch({
                            type: "LOGIN",
                            payload: user
                        })
                        setSubmitted(false);
                        return user;
                    } else {
                        dispatch({
                            type: "FAIL-LOGIN",
                            payload: null
                        })
                        setSubmitted(false);
                    }
                    throw user;
                })
                .then(user => {
                    if (user['id'] != 0) {
                        switch (user['role'] ) {
                            case "ADMIN":
                                navigate('/DashboardDirecteur');
                                break;
                            case "STAFF":
                                navigate('/DashboardCommercial');
                                break;
                            case "CLIENT":
                                navigate('/DashboardClient');
                                break;
                            default:
                                return state
                        }
                    }
                    throw user;
                })
                .catch(error => {
                    /*setSubmitted(false);*/
                });
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            {state['message'] && <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, m: 3 }}>
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Connexion
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adresse mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="motdepasse"
                            label="mot de passe"
                            type="password"
                            id="motdepasse"
                            autoComplete="current-password"
                            onChange={(e) => setMotdepasse(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                    >
                        {submitted && <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>}
                            Connexion
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Mot de passe oublié
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Pas de compte ? Enregistrez vous"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
        </Container>
    );
}

export { LoginPage };