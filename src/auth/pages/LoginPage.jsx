import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import AuthLayout from "../layout/AuthLayout";

// Grid es como un div pero que le podemos agregar propiedades o atributos
// spacing: espacio entre componentes // direction: seria la flex-direction // alignItems y justifyContent de flex
// sx: styled extended, nos permite trabajar con style y acceder al tema que nosotros creamos
// accede al color del tema pq pusimos primary.main y asi esta definido en el tema

// xs define el tamano de pantalla del navegador y le pasamos como numero la cantidad
//  de columnas que va a ocupar

// TextField seria como un input

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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