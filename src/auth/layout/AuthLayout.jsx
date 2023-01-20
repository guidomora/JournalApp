import React from "react";
import {  Grid, Typography } from "@mui/material";


// Grid es como un div pero que le podemos agregar propiedades o atributos
// spacing: espacio entre componentes // direction: seria la flex-direction // alignItems y justifyContent de flex
// sx: styled extended, nos permite trabajar con style y acceder al tema que nosotros creamos
// accede al color del tema pq pusimos primary.main y asi esta definido en el tema


const AuthLayout = ({children, title=""}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ width: {sm:450}, backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
