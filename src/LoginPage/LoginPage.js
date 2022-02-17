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
import { userService } from '../Services';

function LoginPage() {

    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const loggingIn = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        userService.Login(email, motdepasse)
            .then(
                user => {
                    if (user != "") {
                        navigate('/listeTransaction')
                    }
                },
                error => {
                    console.log(error)
                }
            );
    }

    return (
        <Container component="main" maxWidth="xs">
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
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
                            label="motdepasse"
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
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
        </Container>
    );
}

export { LoginPage };