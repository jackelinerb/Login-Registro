import React, { useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import { Container, CssBaseline, Typography, Grid, TextField, InputAdornment, Button, makeStyles } from '@material-ui/core';
import { AlternateEmail, LockOpenOutlined } from '@material-ui/icons';
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
    },
    form: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: "40px",
    },
    submit: {
        marginTop: "20px",
    },
}));
interface State {

    password: string;
    email: string;

}

const Signin: React.FC = () => {
    const classes = useStyles();
    const [dataCard, setdataCard] = useState<State>({
        email: "",
        password: "",
    });

    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required("E-mail obrigatorio")
                    .email("Digite um email valido"),
                password: Yup.string().required().min(6, "No minimo 6 digitos"),
            });
            await schema.validate(data, { abortEarly: false });
        } catch (err) {
            console.log(err, "ERROR");
        }
    }, []);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Registre-se
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email "
                                name="email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmail />
                                        </InputAdornment>
                                    ),
                                }}
                                onBlur={({ target }) =>
                                    setdataCard({
                                        ...dataCard,
                                        email: target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="Senha"
                                label="Senha"
                                type="Senha"
                                id="Senha"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                                onBlur={({ target }) =>
                                    setdataCard({
                                        ...dataCard,
                                        password: target.value,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Cadastrar
                        </Button>
                    <Link to="/Register">
                        Cadastre-se
                    </Link>
                </form>
            </div>
        </Container>
    );
}

export default Signin;
