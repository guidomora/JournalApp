import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/thunks";

// Grid es como un div pero que le podemos agregar propiedades o atributos
// spacing: espacio entre componentes // direction: seria la flex-direction // alignItems y justifyContent de flex
// sx: styled extended, nos permite trabajar con style y acceder al tema que nosotros creamos
// accede al color del tema pq pusimos primary.main y asi esta definido en el tema

// xs define el tamano de pantalla del navegador y le pasamos como numero la cantidad
//  de columnas que va a ocupar

// TextField seria como un input

const LoginPage = () => {
  // traemos del store el state y del auth buscamos el status
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, inputChange, formState } = useForm({
    email: "guido@mail.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn({ email, password }));
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={inputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={inputChange}
            />
          </Grid>
          <Grid
            container
            display={!!errorMessage ? "" : "none"}
            sx={{ mt: 1, mb: 1 }}
          >
            <Grid item xs={12}>
            <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            {/* No es el link de react router sino que es de material ui, por eso le pasamos en component
              RouterLink que es como nosotros llamamos al link de react router para no generar conflicto */}
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
