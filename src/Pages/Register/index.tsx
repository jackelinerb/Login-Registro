import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography,
    Grid,
    InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as Yup from "yup";
import {
    PersonOutline,
    AlternateEmail,
    LockOpenOutlined,
} from "@material-ui/icons";

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
    nome: string;
    password: string;
    email: string;
    sobrenome: string;
}
const Register: React.FC = () => {
    const classes = useStyles();
    const [dataCard, setdataCard] = useState<State>({
        nome: "",
        sobrenome: "",
        email: "",
        password: "",
    });

    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required("Nome obrigatorio"),
                sobrenome: Yup.string().required("Sobrenome obrigatorio"),
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Nome"
                                variant="outlined"
                                required
                                fullWidth
                                id="Nome"
                                label="Nome"
                                autoFocus
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutline />
                                        </InputAdornment>
                                    ),
                                }}
                                onBlur={({ target }) =>
                                    setdataCard({
                                        ...dataCard,
                                        nome: target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="Sobrenome"
                                label="Sobrenome"
                                name="Sobrenome"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutline />
                                        </InputAdornment>
                                    ),
                                }}
                                onBlur={({ target }) =>
                                    setdataCard({
                                        ...dataCard,
                                        sobrenome: target.value,
                                    })
                                }
                            />
                        </Grid>
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
                            Entrar
                        </Button>
                </form>
            </div>
        </Container>
    );
};

export default Register;
