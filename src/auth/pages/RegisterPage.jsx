import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import useForm from "../../hooks/useForm";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  // ejemplo el value incluye @ sino, el mensaje de error: "el correo deben tener @"
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, "El password debe tener 6 o mas caracteres"],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
}

const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    displayName,
    email,
    password,
    inputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  

  const onSubmit = (event) => {
    event.preventDefault();
    // cuando mandamos el formulario el formSubmitted pasa a true
    setFormSubmitted(true)
  };

  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid {isFormValid ? "valido" : "incorrecto"}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={inputChange }
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={inputChange }
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
